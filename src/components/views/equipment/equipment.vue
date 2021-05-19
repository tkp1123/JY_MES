<template>
  <div>
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="设备(产线)配置" name="first">
          设备(产线)配置
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  //设备管理
  name: 'equipment',
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