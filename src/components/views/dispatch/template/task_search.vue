<template>
  <div>
    <el-row :gutter="40">
      <el-select
        v-model="channel_id"
        size="medium"
        placeholder="请选择排序方式"
        class="mg10"
      >
        <el-option
          v-for="item in channelList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
      <el-date-picker
        style="width: 390px"
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-button
        type="primary"
        size="medium"
        @click="submit_getStatistics()"
        class="mg10"
      >
        查询
      </el-button>
    </el-row>
    <el-row :gutter="20" class="pdbt10 pdr10 pdl10">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="taskId" label="任务ID"></el-table-column>
        <el-table-column prop="orderId" label="订单ID"></el-table-column>
        <el-table-column prop="customerName" label="客户名称"></el-table-column>
        <el-table-column prop="orderNum" label="订单编号"> </el-table-column>
        <el-table-column prop="taskType" label="任务类型"></el-table-column>
        <el-table-column prop="operatorId" label="操作人员ID"></el-table-column>
        <el-table-column prop="taskName" label="任务名称"></el-table-column>
        <el-table-column prop="boardTasks" label="板任务数"></el-table-column>
        <el-table-column
          prop="finishedBoardTasks"
          label="已完成板任务数"
        ></el-table-column>
        <el-table-column
          prop="taskIssueDate"
          label="任务发布日期"
        ></el-table-column>
        <el-table-column
          prop="taskIssueTime"
          label="任务发布时间"
          :formatter="formatTaskIssueTime"
        ></el-table-column>
        <el-table-column
          prop="taskExecuteDate"
          label="任务执行日期"
        ></el-table-column>
        <el-table-column
          prop="taskExecuteTime"
          label="任务执行时间"
          :formatter="formatTaskExecuteTime"
        ></el-table-column>
        <el-table-column
          prop="issueStatus"
          label="任务下发状态"
        ></el-table-column>
        <el-table-column prop="status" label="执行状态"></el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-row>
  </div>
</template>
<script>
import { order_task_api } from '@/utils/api'
import { dateUtil } from '@/utils/dateUtil'
export default {
  //生产任务单查询
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      tableData: [],
      channelList: [],
      channel_id: '',
      value1: '',
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      order_task_api({
        pageIndex: 1,
        pageSize: 10,
        sortDirection: 'DESC',
      }).then((res) => {
        if (res.resultCode == 0) {
          this.total = res.data.itemCount
          this.tableData = res.data.items
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    formatTaskIssueTime(row, column, cellValue) {
      if (!cellValue) return ''
      return dateUtil.fullFormatter(new Date(cellValue))
    },
    formatTaskExecuteTime(row, column, cellValue) {
      if (!cellValue) return ''
      return dateUtil.fullFormatter(new Date(cellValue))
    },
  },
}
</script>
<style lang="less" scoped>
</style>