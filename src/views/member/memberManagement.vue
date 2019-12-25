<template>
  <div class="app-container">
    <div class="nav-title">
        <span>会员表</span>
        <div class="btn">
        <el-button type="primary" icon="el-icon-plus">添加</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{}
  },
  methods: {}
};
</script>

<style  lang="less" scoped>
.app-container {
  padding: 0;
  background-color: #fafafa;
  height: calc(100vh - 60px);
}
@height: 60px;
.nav-title{
  margin-top:10px;
  height: @height;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,0.08);
  span{
    height: @height;
    line-height: @height;
    margin-left: 3%;
    font-size: 20px;
    font-weight: 600;
  }
  .btn{
    height: @height;
    line-height: @height;
    display: inline-block;
    float: right;
    margin-right: 2%;
  }
}
</style>