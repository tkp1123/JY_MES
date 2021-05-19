<template>
  <div>
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="人员管理" name="first">人员管理</el-tab-pane>
        <el-tab-pane label="操作日志" name="second">操作日志</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  //系统配置
  name: 'configuration',
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    handleClick() {},
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