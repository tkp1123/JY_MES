<template>
  <div>
    <el-card class="box-card">
      <el-page-header @back="goBack" content="止损明细"></el-page-header>
      <el-row :gutter="30">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="会员手机号">
            <el-input
              v-model="formInline.mobile"
              placeholder="会员手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="会员名称">
            <el-input
              v-model="formInline.name"
              placeholder="会员名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="单号">
            <el-input
              v-model="formInline.orderId"
              placeholder="单号"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="onSubmit">重置</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            width="200"
            fixed
            prop="holdOrderId"
            label="单号"
          ></el-table-column>
          <el-table-column
            fixed
            prop="agentName"
            label="所属代理商"
          ></el-table-column>
          <el-table-column
            fixed
            prop="memberName"
            label="会员名称"
          ></el-table-column>
          <el-table-column
            fixed
            prop="cellPhoneNumber"
            label="会员手机号"
          ></el-table-column>
          <el-table-column
            fixed
            prop="stockSymbol"
            label="股票代号"
          ></el-table-column>
          <el-table-column
            fixed
            prop="stockName"
            label="股票名称"
          ></el-table-column>
          <el-table-column
            prop="oldStopPrice"
            label="修改前止损"
          ></el-table-column>
          <el-table-column
            prop="stopPrice"
            label="修改后止损"
          ></el-table-column>
          <el-table-column
            prop="createdTime"
            label="创建时间"
          ></el-table-column>
          <el-table-column
            prop="updatedTime"
            label="更新时间"
          ></el-table-column>
        </el-table>
        <el-row>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </el-row>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  //止损历史
  name: 'stoplossDetail',
  data() {
    return {
      queryInfo: '',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formInline: {
        mobile: '',
        name: '',
        orderId: '',
      },
      tableData: [
        {
          holdOrderId: '12323534232654456',
          agentName: '二级代理商002',
          memberName: '吴广',
          cellPhoneNumber: '13688993442',
          stockSymbol: '000411',
          stockName: '英特集团',
          oldStopPrice: 3.15,
          stopPrice: 2.1,
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          holdOrderId: '34464665777686789',
          agentName: '二级代理商002',
          memberName: '陈胜',
          cellPhoneNumber: '13688993442',
          stockSymbol: '000638',
          stockName: '万方发展',
          oldStopPrice: 3.15,
          stopPrice: 2.1,
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          holdOrderId: '12646653437682339',
          agentName: '三级代理商003',
          memberName: '范增',
          cellPhoneNumber: '13688993442',
          stockSymbol: '000411',
          stockName: '英特集团',
          oldStopPrice: 3.15,
          stopPrice: 2.1,
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          holdOrderId: '34464665777686789',
          agentName: '一级代理商001',
          memberName: '钟昧离',
          cellPhoneNumber: '13688993442',
          stockSymbol: '688185',
          stockName: '康希诺',
          oldStopPrice: 3.15,
          stopPrice: 2.1,
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
      ],
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    onSubmit() {
      console.log('submit!')
    },
    goBack() {
      console.log('go back')
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
  padding-top: 20px;
}
.demo-form-inline {
  padding-left: 15px;
}
.el-page-header {
  padding: 0 20px 30px 0;
}
</style>