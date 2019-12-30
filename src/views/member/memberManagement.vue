<template>
  <div class="app-container">
    <div class="nav-title">
      <span>会员表</span>
      <div class="btn">
        <el-button type="primary" icon="el-icon-plus" @click="handleClick()">添加</el-button>
      </div>
    </div>
    <div class="table-list">
      <div class="search">
        <div class="inline-block">
          <span class="demonstration">昵称:</span>
          <el-input placeholder="请输入内容" v-model="searchForm.nickName" clearable style="width:200px"></el-input>
        </div>
        <div class="inline-block">
          <span class="demonstration">姓名:</span>
          <el-input placeholder="请输入内容" v-model="searchForm.name" clearable style="width:200px"></el-input>
        </div>
        <div class="inline-block">
          <span class="demonstration">证件号码:</span>
          <el-input placeholder="请输入内容" v-model="searchForm.idCard" clearable style="width:200px"></el-input>
        </div>
        <div class="inline-block">
          <span class="demonstration">手机号码:</span>
          <el-input placeholder="请输入内容" v-model="searchForm.phone" clearable style="width:200px"></el-input>
        </div>
        <div class="inline-block">
          <span class="demonstration">创建时间:</span>
          <el-date-picker
            v-model="searchForm.creationTime"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        <div class="inline-block">
          <span class="demonstration">状态:</span>
          <el-radio v-model="searchForm.state" label="1">全部</el-radio>
          <el-radio v-model="searchForm.state" label="2">有效</el-radio>
          <el-radio v-model="searchForm.state" label="3">待审核</el-radio>
          <el-radio v-model="searchForm.state" label="4">草稿</el-radio>
        </div>
        <div class="inline-block" style="margin-left: 30px;">
          <span class="demonstration">性别:</span>
          <el-radio v-model="searchForm.sex" label="1">全部</el-radio>
          <el-radio v-model="searchForm.sex" label="2">男</el-radio>
          <el-radio v-model="searchForm.sex" label="3">女</el-radio>
        </div>
        <div class="inline-block" style="margin-left:10px">
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">冻结</el-button>
            <el-button type="text" size="small">停用</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 弹框 -->
      <el-dialog title="编辑会员表" :visible.sync="dialogFormVisible" top="30px">
        <el-form :model="form">
          <el-row>
            <el-col :span="12">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="真实姓名" :label-width="formLabelWidth">
                <el-input v-model="form.realName" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="手机号码" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="电子邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.email" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="证件类型" :label-width="formLabelWidth">
                <el-select v-model="form.type" placeholder="请选择证件类型">
                  <el-option label="身份证" value="sfz"></el-option>
                  <el-option label="护照" value="hz"></el-option>
                  <el-option label="港澳通行证" value="ga"></el-option>
                  <el-option label="台湾通行证" value="tw"></el-option>
                  <el-option label="回乡证" value="hx"></el-option>
                  <el-option label="台胞证" value="tb"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="证件号码" :label-width="formLabelWidth">
                <el-input v-model="form.idCard" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="出生日期" :label-width="formLabelWidth">
                <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-radio v-model="form.sex" label="1">男</el-radio>
                <el-radio v-model="form.sex" label="2">女</el-radio>
                <el-radio v-model="form.sex" label="3">未知</el-radio>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="所在地区" :label-width="formLabelWidth">
                <el-cascader
                  v-model="form.region"
                  placeholder="请选择省市区"
                  separator=">"
                  :options="areaList"
                  :props="{ expandTrigger: 'hover',value:'label' }"
                  @change="handleChange"
                ></el-cascader>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="详细地址" :label-width="formLabelWidth">
                <el-input v-model="form.site" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="头像" :label-width="formLabelWidth">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="第三方平台" :label-width="formLabelWidth">
                <el-select v-model="form.thirdParty" placeholder="请选择第三方平台">
                  <el-option label="QQ" value="qq"></el-option>
                  <el-option label="微信" value="wx"></el-option>
                  <el-option label="其他" value="qt"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="第三方openid" :label-width="formLabelWidth">
                <el-input v-model="form.openid" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="第三方昵称" :label-width="formLabelWidth">
                <el-input v-model="form.nickName" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="form.remark"
              maxlength="130"
              show-word-limit
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 分页 -->
    <div class="el-pagination-container">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="pagerTotal"
        @current-change="current_change"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getInfo } from "@/api/member/memberManagement";
import { area } from "@/assets/area/area.js";
export default {
  mounted() {
    this.areaList = area;
  },
  data() {
    return {
      // 地域数据
      areaList: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        }
      ],
      form: {
        // 名称
        name: "",
        // 真实姓名
        realName: "",
        // 性别
        sex: "",
        // 出生年月日
        birthday: "",
        // 证件类型
        type: "",
        // 证件号码
        idCard: "",
        // 电子邮箱
        email: "",
        // 手机号码
        phone: "",
        // 头像
        avatar: "",
        // 所在地区
        region: "",
        // 详细地址
        site: "",
        // 第三方平台
        thirdParty: "",
        // 第三方openid
        openid: "",
        // 第三方昵称
        nickName: "",
        // 备注
        remark: ""
      },
      // 搜索
      searchForm: {
        // 昵称
        nickName: "",
        // 名称
        name: "",
        // 证件号码
        idCard: "",
        // 手机号码
        phone: "",
        // 创建时间
        creationTime: "",
        // 性别
        sex: "",
        // 状态
        state: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      imageUrl: "",
      pagerTotal: 10
    };
  },
  methods: {
    // 重置按钮
    reset() {
      this.searchForm = {
        nickName: "",
        name: "",
        idCard: "",
        phone: "",
        creationTime: "",
        sex: "",
        state: ""
      };
    },
    // 搜索按钮
    search() {
      console.log(this.searchForm);
    },
    // 打开弹框
    handleClick() {
      this.dialogFormVisible = true;
    },
    // 地区变化
    handleChange(value) {
      console.log(value);
    },
    // 弹框取消
    cancel() {
      this.dialogFormVisible = false;
    },
    // 弹框确定
    submit() {
      console.log(this.form);

      this.dialogFormVisible = false;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 分页
    current_change: function(currentPage) {
      console.log(currentPage);
    },
    beforeAvatarUpload(file) {
      const isJPG =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG,PNG,JPEG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
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
  .btn {
    height: @height;
    line-height: @height;
    display: inline-block;
    float: right;
    margin-right: 2%;
  }
}
.table-list {
  padding: 20px;
}
.search {
  background-color: #fff;
  width: 100%;
  padding: 5px 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.demonstration {
  font-size: 14px;
  color: rgba(45, 45, 45, 45.85);
  margin: 0 10px;
}
.inline-block {
  padding: 5px 0;
}
.el-form-item @{deep} .el-form-item__label {
  text-align: center;
  font-weight: 400;
}
.el-dialog__wrapper @{deep}.el-dialog__header {
  border-bottom: 1px solid #e6e6e6;
}
.el-dialog__wrapper @{deep}.el-dialog {
  border-radius: 7px;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
/* .el-button+.el-button {
    margin-left: 0px;
} */
</style>