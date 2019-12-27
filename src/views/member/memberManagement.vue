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
          <el-input placeholder="请输入内容" v-model="input" clearable style="width:200px"></el-input>
        </div>
        <div class="inline-block">
          <span class="demonstration">姓名:</span>
          <el-input placeholder="请输入内容" v-model="input" clearable style="width:200px"></el-input>
        </div>
        <div class="inline-block">
          <span class="demonstration">证件号码:</span>
          <el-input placeholder="请输入内容" v-model="input" clearable style="width:200px"></el-input>
        </div>
        <div class="inline-block">
          <span class="demonstration">手机号码:</span>
          <el-input placeholder="请输入内容" v-model="input" clearable style="width:200px"></el-input>
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
          <el-radio v-model="radio" label="1">全部</el-radio>
          <el-radio v-model="radio" label="2">有效</el-radio>
          <el-radio v-model="radio" label="3">待审核</el-radio>
          <el-radio v-model="radio" label="4">草稿</el-radio>
        </div>
        <div class="inline-block">
          <span class="demonstration">性别:</span>
          <el-radio v-model="radio" label="1">全部</el-radio>
          <el-radio v-model="radio" label="2">男</el-radio>
          <el-radio v-model="radio" label="3">女</el-radio>
        </div>
        <div class="inline-block" style="margin-left:10px">
          <el-button type="primary">搜索</el-button>
          <el-button>重置</el-button>
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
                  separator="-"
                  :options="options2"
                  :props="{ expandTrigger: 'hover' }"
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
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
      options2: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      value: "",
      value1: "",
      input: "",
      checkList: ["选中且禁用", "复选框 A"],
      radio: "1",
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
        },
      ],
      dialogFormVisible: false,
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
      formLabelWidth: "120px",
      imageUrl: "",
      pagerTotal: 10
    };
  },
  methods: {
    handleClick() {
      this.dialogFormVisible = true;
    },
    handleChange(value) {
      console.log(value);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    current_change: function(currentPage) {
      console.log(currentPage);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
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