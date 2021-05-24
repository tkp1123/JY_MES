<template>
  <div class="pd20">
    <el-card shadow="never">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="订单排产" name="first">
          <OrderItem v-if="activeName == 'first'"></OrderItem>
        </el-tab-pane>
        <el-tab-pane label="生产任务单查询" name="second">
          <TaskSearch v-if="activeName == 'second'"></TaskSearch>
        </el-tab-pane>
        <el-tab-pane label="生产任务管理" name="third">
          <TaskManage v-if="activeName == 'third'"></TaskManage>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import OrderItem from './template/order_item'
import TaskManage from './template/task_manage'
import TaskSearch from './template/task_search'
export default {
  name: 'dispatch',
  components: {
    OrderItem,
    TaskManage,
    TaskSearch,
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