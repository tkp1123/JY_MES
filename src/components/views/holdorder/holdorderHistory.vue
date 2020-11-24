<template>
  <div>
    <el-card class="box-card">
      <el-page-header @back="goBack" content="持仓明细"></el-page-header>
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
          <el-form-item label="状态">
            <el-select v-model="formInline.region" placeholder="平仓状态">
              <el-option label="未平仓" value="0"></el-option>
              <el-option label="已平仓" value="1"></el-option>
            </el-select>
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
            prop="id"
            label="单号"
          ></el-table-column>
          <el-table-column
            fixed
            width="150"
            prop="agentName"
            label="所属代理商"
          ></el-table-column>
          <el-table-column
            fixed
            width="100"
            prop="memberName"
            label="会员名称"
          ></el-table-column>
          <el-table-column
            fixed
            width="100"
            prop="cellPhoneNumber"
            label="会员手机号"
          ></el-table-column>
          <el-table-column
            fixed
            width="100"
            prop="stockSymbol"
            label="股票代号"
          ></el-table-column>
          <el-table-column
            fixed
            width="100"
            prop="stockName"
            label="股票名称"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="amount"
            label="本金"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="price"
            label="单价"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="quantity"
            label="数量"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="multiple"
            label="放大倍数"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="allocAmount"
            label="配资金额"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="stopLoss"
            label="止损"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="stopProfit"
            label="止盈"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="creditGold"
            label="信用金"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="isClosed"
            label="是否平仓"
          ></el-table-column>
          <el-table-column
            width="100"
            prop="createdTime"
            label="创建时间"
          ></el-table-column>
          <el-table-column
            width="100"
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
  //持仓历史
  name: 'holdorderHistory',
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
      },
      tableData: [
        {
          id: '141694176778518536',
          agentName: '二级代理002',
          memberName: '陈胜',
          cellPhoneNumber: '1354826457',
          stockSymbol: '000090',
          stockName: '天健集团',
          amount: 21000.0,
          price: 2.5,
          quantity: 8400,
          multiple: 2,
          allocAmount: 42000.0,
          stopLoss: 0,
          stopProfit: 0,
          creditGold: 0,
          isClosed: '未平仓',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          id: '141695948826345480',
          agentName: '二级代理002',
          memberName: '陈胜',
          cellPhoneNumber: '1354826457',
          stockSymbol: '000090',
          stockName: '天健集团',
          amount: 21000.0,
          price: 2.5,
          quantity: 8400,
          multiple: 2,
          allocAmount: 42000.0,
          stopLoss: 0,
          stopProfit: 0,
          creditGold: 0,
          isClosed: '未平仓',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          id: '141696000185597960',
          agentName: '二级代理002',
          memberName: '陈胜',
          cellPhoneNumber: '1354826457',
          stockSymbol: '000090',
          stockName: '天健集团',
          amount: 21000.0,
          price: 2.5,
          quantity: 8400,
          multiple: 2,
          allocAmount: 42000.0,
          stopLoss: 0,
          stopProfit: 0,
          creditGold: 0,
          isClosed: '未平仓',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          id: '141697141830057992',
          agentName: '二级代理002',
          memberName: '陈胜',
          cellPhoneNumber: '1354826457',
          stockSymbol: '000090',
          stockName: '天健集团',
          amount: 21000.0,
          price: 2.5,
          quantity: 8400,
          multiple: 2,
          allocAmount: 42000.0,
          stopLoss: 0,
          stopProfit: 0,
          creditGold: 0,
          isClosed: '未平仓',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          id: '142011990976495624',
          agentName: '二级代理002',
          memberName: '陈胜',
          cellPhoneNumber: '1354826457',
          stockSymbol: '000090',
          stockName: '天健集团',
          amount: 21000.0,
          price: 2.5,
          quantity: 8400,
          multiple: 2,
          allocAmount: 42000.0,
          stopLoss: 0,
          stopProfit: 0,
          creditGold: 0,
          isClosed: '未平仓',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          id: '142015157315829768',
          agentName: '二级代理002',
          memberName: '陈胜',
          cellPhoneNumber: '1354826457',
          stockSymbol: '000090',
          stockName: '天健集团',
          amount: 21000.0,
          price: 2.5,
          quantity: 8400,
          multiple: 2,
          allocAmount: 42000.0,
          stopLoss: 0,
          stopProfit: 0,
          creditGold: 0,
          isClosed: '未平仓',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
      ],
      options: [
        {
          value: '0',
          label: '未启用',
        },
        {
          value: '0',
          label: '已启用',
        },
      ],

      condition: {
        loginId: '',
        nickName: '',
        status: '',
      },
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