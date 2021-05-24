<template>
  <div class="pd20">
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="设备(产线)配置" name="first">
          <Device v-if="activeName == 'first'"></Device>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import Device from './template/device'
export default {
  //设备管理
  name: 'equipment',
  components: {
    Device,
  },
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