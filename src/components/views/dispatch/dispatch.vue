<template>
  <div>
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="订单排产" name="first">订单排产</el-tab-pane>
        <el-tab-pane label="生产任务单查询" name="second"
          >生产任务单查询</el-tab-pane
        >
        <el-tab-pane label="生产任务管理" name="third"
          >生产任务管理</el-tab-pane
        >
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'dispatch',
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