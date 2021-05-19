<template>
  <div>
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="事件码配置" name="first">事件码配置</el-tab-pane>
        <el-tab-pane label="回应码配置" name="second"> 回应码配置 </el-tab-pane>
        <el-tab-pane label="心跳间隔/秒" name="third">
          心跳间隔/秒
        </el-tab-pane>
        <el-tab-pane label="测呆时间间隔" name="fourth">
          测呆时间间隔
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  //系统参数
  name: 'parameter',
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