<template>
  <div>
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="订单查询" name="first">
          <OrderSearch v-if="activeName == 'first'"></OrderSearch>
        </el-tab-pane>
        <el-tab-pane label="订单统计" name="second">
          <OrderStatistics v-if="activeName == 'second'"></OrderStatistics>
        </el-tab-pane>
        <el-tab-pane label="商品统计" name="third">
          <GoodsStatistics v-if="activeName == 'third'"></GoodsStatistics>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import OrderSearch from './template/order_search'
import GoodsStatistics from './template/goods_statistics'
import OrderStatistics from './template/order_statistics'
export default {
  name: 'order',
  components: {
    OrderSearch,
    GoodsStatistics,
    OrderStatistics,
  },
  data() {
    return {
      activeName: 'first',
    }
  },
  mounted() {},
  methods: {
    handleClick() {},
  },
}
</script>
<style lang="less" scoped>
</style>