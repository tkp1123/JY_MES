<template>
  <div>
    <el-card shadow="never">
      <el-row class="bg-white" :gutter="20">
        <el-col :span="4">
          <div class="pd10 text-center font-wei_7">xxxxx</div>
          <div class="pd10 text-center font-size_12">
            <span style="font-size: 18px; font-weight: 700; color: #39c15b"
              >0</span
            >人
          </div>
        </el-col>
        <el-col :span="4">
          <div class="pd10 text-center font-wei_7">xxxxx</div>
          <div class="pd10 text-center font-size_12">
            <span style="font-size: 18px; font-weight: 700; color: #1890ff"
              >0</span
            >人
          </div>
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="4"></el-col>
        <el-col :span="4"></el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </el-card>
    <el-card shadow="never" style="margin-top: 10px">
      <el-row :gutter="20" style="padding: 10px">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">
            <el-row :gutter="20" class="pdbt10 pdr10 pdl10">
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="name" label="店铺名称"></el-table-column>
                <el-table-column
                  prop="category_id"
                  label="所属分类"
                  width="150"
                ></el-table-column>
                <el-table-column
                  prop="type_id"
                  label="店铺类型"
                  width="150"
                ></el-table-column>
                <el-table-column prop="describe_name" label="简介" width="500">
                </el-table-column>
                <el-table-column
                  prop="create_time"
                  label="添加时间"
                  width="160"
                ></el-table-column>
                <el-table-column prop="status_id" label="店铺状态" width="150">
                  <template slot-scope="scope">
                    <span v-if="scope.row.status_id == '1'">正常</span>
                    <span v-else>已禁用</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="200">
                  <template slot-scope="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      icon="el-icon-edit"
                      @click="editItem(scope.row)"
                    ></el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="deleteItem(scope.row)"
                      icon="el-icon-delete"
                    ></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-row>
            <el-row>
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="1"
                :page-sizes="[10, 20, 30]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="10"
              ></el-pagination>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"
            >定时任务补偿</el-tab-pane
          >
        </el-tabs>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'welcome',

  data() {
    return {
      activeName: 'first',
      tableData: [],
    }
  },
  mounted() {
    console.log(this.$store.state.user.token)
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSizeChange() {},
    handleCurrentChange() {},
  },
}
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 15px;
  font-size: 14px;
}
.el-pagination {
  padding: 10px;
}
</style>