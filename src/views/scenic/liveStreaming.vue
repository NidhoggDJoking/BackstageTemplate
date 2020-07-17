<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :show-header="false"
      style="width: 100%;margin-bottom: 20px;"
      row-key="value"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="value" label="姓名" width="180"></el-table-column>
      <el-table-column prop="label" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { hunan } from "@/assets/area/hunan.js";

export default {
  mounted() {
    console.log(hunan);
    
    this.tableData = hunan;
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄"
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄"
            }
          ]
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>