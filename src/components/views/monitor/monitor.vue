<template>
  <div>
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="产线状态" name="first">产线状态</el-tab-pane>
        <el-tab-pane label="产线事件监控" name="second"
          >产线事件监控
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  //产线监控
  name: 'monitor',
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