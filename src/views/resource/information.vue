<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      :row-class-name="tableRowClassName"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="标题" width="500">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <!-- <el-table-column label="用户" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>-->
      <el-table-column label="数量" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="300">
        <template>
          <el-button @click="open">操作1</el-button>
          <el-button @click="dialogTableVisible = true">操作2</el-button>
          <el-button @click="dialogFormVisible = true">操作3</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="按钮" width="200">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.button == 'error'"
            type="primary"
            icon="el-icon-edit"
            circle
            @click="error"
          ></el-button>
          <el-button
            v-if="scope.row.button == 'info'"
            type="info"
            icon="el-icon-message"
            circle
            @click="info"
          ></el-button>
          <el-button
            v-if="scope.row.button == 'warning'"
            type="warning"
            icon="el-icon-star-off"
            circle
            @click="warning"
          ></el-button>
          <el-button
            v-if="scope.row.button == 'success'"
            type="danger"
            icon="el-icon-delete"
            circle
            @click="success"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹框 -->
    <el-dialog title="标题" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称" label-width="120px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" label-width="120px">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="一" value="shanghai"></el-option>
            <el-option label="二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
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
import { getList } from "@/api/table";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      pagerTotal: 10,
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then(response => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
    current_change: function(currentPage) {
      console.log(currentPage);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 4 == 1) {
        return "warning-row";
      } else if (rowIndex % 4 == 3) {
        return "success-row";
      }
      return "";
    },
    success() {
      this.$notify({
        title: "成功",
        message: "删除成功",
        type: "success"
      });
    },

    warning() {
      this.$notify({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning"
      });
    },

    info() {
      this.$notify.info({
        title: "消息",
        message: "这是一条消息的提示消息"
      });
    },

    error() {
      this.$notify.error({
        title: "错误",
        message: "这是一条错误的提示消息"
      });
    },
    open() {
      this.$alert("<strong>这是 <i>HTML</i> 片段</strong>", "HTML 片段", {
        dangerouslyUseHTMLString: true
      });
    }
  }
};
</script>


<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>