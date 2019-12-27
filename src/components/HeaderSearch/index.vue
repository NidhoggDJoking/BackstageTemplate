<template>
  <div :class="{'show':show}" class="header-search">
    <svg-icon class-name="search-icon" icon-class="search" @click.stop="click" />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="Search"
      class="header-search-select"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      />
    </el-select>
  </div>
</template>

<script>
// 使搜索结果更符合期望
// fuse是一个轻量级的模糊搜索模块

import Fuse from "fuse.js";
import path from "path";

export default {
  name: "HeaderSearch",
  data() {
    return {
      search: "搜索",
      options: [],
      searchPool: [],
      show: false,
      fuse: undefined
    };
  },
  computed: {
    routes() {
      console.log(this.$store.getters.permission_routes);

      return this.$store.getters.permission_routes;
    }
  },
  watch: {
    routes() {
      this.searchPool = this.generateRoutes(this.routes);
    },
    searchPool(list) {
      this.initFuse(list);
    },
    show(value) {
      if (value) {
        document.body.addEventListener("click", this.close);
      } else {
        document.body.removeEventListener("click", this.close);
      }
    }
  },
  mounted() {
    this.searchPool = this.generateRoutes(this.routes);
  },
  methods: {
    click() {
      this.show = !this.show;
      if (this.show) {
        this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus();
      }
    },
    close() {
      this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur();
      this.options = [];
      this.show = false;
    },
    change(val) {
      this.$router.push(val.path);
      this.search = "搜索";
      this.options = [];
      this.$nextTick(() => {
        this.show = false;
      });
    },
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: "title",
            weight: 0.7
          },
          {
            name: "path",
            weight: 0.3
          }
        ]
      });
    },
    // 过滤掉可以显示在侧边栏中的路由
    // 并生成国际化的标题
    generateRoutes(routes, basePath = "/", prefixTitle = []) {
      let res = [];

      for (const router of routes) {
        // skip hidden router
        if (router.hidden) {
          continue;
        }

        const data = {
          path: path.resolve(basePath, router.path),
          title: [...prefixTitle]
        };

        if (router.meta && router.meta.title) {
          data.title = [...data.title, router.meta.title];

          if (router.redirect !== "noRedirect") {
            // 只使用标题推送路由
            // 特殊情况:需要排除父路由器没有重定向
            res.push(data);
          }
        }

        // 递归的孩子路线
        if (router.children) {
          const tempRoutes = this.generateRoutes(
            router.children,
            data.path,
            data.title
          );
          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes];
          }
        }
      }
      return res;
    },
    querySearch(query) {
      if (query !== "") {
        this.options = this.fuse.search(query);
      } else {
        this.options = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    /deep/ .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 6px;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
.el-select-dropdown__item.selected {
  font-size: 14px;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 400;
}
</style>
