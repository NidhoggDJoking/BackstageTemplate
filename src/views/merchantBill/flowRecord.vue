<template>
  <el-row>
    <el-col :span="8">
      <label>省</label>
      <el-select v-model="provinceValue" placeholder="请选择省" @change="chooseProvince">
        <el-option
          v-for="item in provinceData"
          :key="item.code"
          :label="item.name"
          :value="item.name"
        ></el-option>
      </el-select>
    </el-col>
    <el-col :span="8">
      <label>市</label>
      <el-select v-model="cityValue" placeholder="请选择市" @change="chooseCity">
        <el-option v-for="item in cityData" :key="item.code" :label="item.name" :value="item.name"></el-option>
      </el-select>
    </el-col>
    <el-col :span="8">
      <label>区、县</label>
      <el-select v-model="areaValue" @change="chooseArea" placeholder="请选择区、县">
        <el-option v-for="item in areaData" :key="item.code" :label="item.name" :value="item.name"></el-option>
      </el-select>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      provinceValue: "",
      cityValue: "",
      areaValue: "",
      provinceData: [],
      cityData: [],
      areaData: []
    };
  },
  created() {
    this.provinceData = require("@/assets/ChinaCity.json");
  },
  methods: {
    chooseProvince(value) {
      this.cityValue = "";
      this.areaValue = "";
      this.cityData = [];
      this.areaData = [];
      this.provinceData.map(e => {
        //遍历数据
        if (value == e.name) {
          this.cityData = e.cityList;
          return;
        }
      });
    },
    chooseCity(value) {
      this.areaValue = "";
      this.cityData.map(e => {
        //遍历数据
        if (value == e.name) {
          this.areaData = e.areaList;
          return;
        }
      });
    },
    chooseArea() {}
  }
};
</script>