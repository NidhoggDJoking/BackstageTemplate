<template>
  <div class="destination">
    <div class="nav-title">
      <span>目的地管理</span>
    </div>
    <div class="table-list">
      <div class="custom-tree-container">
        <div class="block">
          <el-tree :data="data" node-key="id" default-expand-all :expand-on-click-node="false" >
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
              <span>
                <i class="el-icon-top"></i>
                <i class="el-icon-bottom"></i>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
                <i class="el-icon-plus"></i>
                <el-button type="text" size="mini" @click="() => append(data)">添加</el-button>
                <el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
              </span>
            </span>
          </el-tree>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let id = 1000;

export default {
  data() {
    const data = [
      {
        id: 1,
        label: "一级 1",
        children: [
          {
            id: 4,
            label: "二级 1-1",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              },
              {
                id: 10,
                label: "三级 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "一级 2",
        children: [
          {
            id: 5,
            label: "二级 2-1"
          },
          {
            id: 6,
            label: "二级 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "一级 3",
        children: [
          {
            id: 7,
            label: "二级 3-1"
          },
          {
            id: 8,
            label: "二级 3-2"
          }
        ]
      }
    ];
    return {
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data))
    };
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },

    // renderContent(h, { node, data, store }) {
    //   return (
    //     <span class="custom-tree-node">
    //       <span>{node.label}</span>
    //       <span>
    //         <el-button
    //           size="mini"
    //           type="text"
    //           on-click={() => this.append(data)}
    //         >
    //           Append
    //         </el-button>
    //         <el-button
    //           size="mini"
    //           type="text"
    //           on-click={() => this.remove(node, data)}
    //         >
    //           Delete
    //         </el-button>
    //       </span>
    //     </span>
    //   );
    // }
  }
};
</script>

<style  lang="less" scoped>
@deep: ~">>>";
.app-container {
  padding: 0;
  background-color: #fafafa;
  height: calc(100vh - 60px);
}
@height: 60px;
.nav-title {
  margin-top: 10px;
  height: @height;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  span {
    height: @height;
    line-height: @height;
    margin-left: 21px;
    font-size: 20px;
    font-weight: 600;
  }
}
.table-list {
  padding: 20px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>