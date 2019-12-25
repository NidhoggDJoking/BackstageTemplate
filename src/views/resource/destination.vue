<template>
  <div class="destination">
    <div class="search">
      <div class="inline-block">
        <span class="demonstration">输入框:</span>
        <el-input placeholder="请输入内容" v-model="input" clearable style="width:200px"></el-input>
      </div>
            <div class="inline-block">
        <span class="demonstration">输入框:</span>
        <el-input placeholder="请输入内容" v-model="input" clearable style="width:200px"></el-input>
      </div>
            <div class="inline-block">
        <span class="demonstration">输入框:</span>
        <el-input placeholder="请输入内容" v-model="input" clearable style="width:200px"></el-input>
      </div>
      <div class="inline-block">
        <span class="demonstration">选择框:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="inline-block">
        <span class="demonstration">创建时间:</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <div class="inline-block">
        <span class="demonstration">状态:</span>
        <el-checkbox-group v-model="checkList" class="inline-block">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </div>
         <div class="inline-block">
        <span class="demonstration">状态2:</span>
<el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
      </div>
      <div class="inline-block" style="margin-left:10px">
        <el-button type="primary" size="small">搜索</el-button>
        <el-button size="small">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      value1: "",
      input: "",
      checkList: ['选中且禁用','复选框 A'],
      radio: '1'
    };
  }
};
</script>

<style scoped>
.destination {
  background-color: #fafafa;
  height: calc(100vh - 50px);
}
.search {
  background-color: #fff;
  /* height: 100px; */
  width: 100%;
  margin-top: 10px;
  padding-bottom:5px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.demonstration {
  font-size: 14px;
  color: rgba(45, 45, 45, 45.85);
  margin: 0 10px;
}
.inline-block{
  padding: 5px 0;
  /* min-height: 45px; */
}
</style>