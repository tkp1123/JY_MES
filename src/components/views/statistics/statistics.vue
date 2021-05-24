<template>
  <div class="pd20">
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="事件统计" name="first">事件统计</el-tab-pane>
        <el-tab-pane label="人员操作统计" name="second">
          人员操作统计
        </el-tab-pane>
        <el-tab-pane label="产线生产统计" name="third">
          产线生产统计
        </el-tab-pane>
        <el-tab-pane label="产线当日上产统计" name="fourth">
          产线当日上产统计
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'statistics',
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