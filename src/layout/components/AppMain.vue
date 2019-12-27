<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden scroll;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
.app-main::-webkit-scrollbar-track {
  border-radius: 25px;
  background-color: #fff;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
}

/*滑动条*/

.app-main::-webkit-scrollbar {
  width: 5px;
  background-color: #ffffff;
}

/*滑块*/

.app-main::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom, #4aff52, #0fffc4, #00d0ff);
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
