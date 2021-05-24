<template>
  <div class="pd20">
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="人员管理" name="first">
          <Personnel v-if="activeName == 'first'"></Personnel>
        </el-tab-pane>
        <el-tab-pane label="操作日志" name="second">
          <Log v-if="activeName == 'second'"></Log>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import Log from './template/log'
import Personnel from './template/personnel'
export default {
  //系统配置
  name: 'configuration',
  components: {
    Log,
    Personnel,
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
</style>