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
        <el-table-column prop="deviceId" label="设备ID"></el-table-column>
        <el-table-column prop="deviceName" label="设备名称"></el-table-column>
        <el-table-column prop="processId" label="工艺ID"></el-table-column>
        <el-table-column prop="ip" label="上位机IP"> </el-table-column>
        <el-table-column prop="nfsURL" label="订单编号"></el-table-column>
        <el-table-column prop="nodeNo" label="同类设备节点ID"></el-table-column>
        <el-table-column
          prop="processNo"
          label="工艺节点顺序号"
        ></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
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
import { device_api } from '@/utils/api'
import { dateUtil } from '@/utils/dateUtil'
export default {
  //设备(产线)配置
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
    this.getOrder()
  },
  methods: {
    getOrder() {
      device_api({ pageIndex: 1, pageSize: 10, sortDirection: 'DESC' }).then(
        (res) => {
          if (res.resultCode == 0) {
            this.total = res.data.itemCount
            this.tableData = res.data.items
          }
        }
      )
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      this.currentPage = val
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