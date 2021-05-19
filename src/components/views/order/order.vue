<template>
  <div>
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="订单查询" name="first">订单查询</el-tab-pane>
        <el-tab-pane label="订单统计" name="second">订单统计</el-tab-pane>
        <el-tab-pane label="商品统计" name="third">商品统计</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import { orderAPI } from '@/utils/api'
export default {
  name: 'order',
  data() {
    return {
      activeName: 'first',
    }
  },
  mounted() {
    this.getApi()
  },
  methods: {
    handleClick() {},
    getApi() {
      orderAPI({ pageIndex: 1, pageSize: 10, sortDirection: 'DESC' }).then(
        (result) => {
          console.log(result)
        }
      )
    },
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