<template>
  <div>
    <el-card class="box-card">
      <el-page-header @back="goBack" content="代理商列表"></el-page-header>
      <el-row :gutter="30">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="代理商名称">
            <el-input
              v-model="formInline.name"
              placeholder="代理商名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input
              v-model="formInline.mobile"
              placeholder="手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.status" placeholder="状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="onReset">重置</el-button>
            <el-button type="primary" icon="el-icon-plus" @click="add"
              >新增</el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          border
          stripe
          row-key="agentId"
          style="width: 100%"
          default-expand-all
          :tree-props="{ children: 'children' }"
        >
          <el-table-column
            fixed
            width="200"
            prop="agentId"
            label="代理商ID"
          ></el-table-column>
          <el-table-column
            prop="name"
            fixed
            width="200"
            label="代理商名称"
          ></el-table-column>
          <el-table-column
            width="200"
            prop="cellPhoneNumber"
            label="手机号"
          ></el-table-column>
          <el-table-column
            prop="person"
            label="联系人"
            width="200"
          ></el-table-column>
          <el-table-column
            prop="referralCode"
            width="150"
            label="推荐码"
          ></el-table-column>
          <el-table-column
            width="150"
            prop="positionRatio"
            label="头寸比率"
          ></el-table-column>
          <el-table-column
            width="150"
            prop="buyFeeRatio"
            label="手续费比率"
          ></el-table-column>
          <el-table-column
            width="150"
            prop="deferFeeRatio"
            label="递延费比率"
          ></el-table-column>
          <el-table-column
            width="200"
            prop="createdTime"
            label="创建时间"
          ></el-table-column>
          <el-table-column
            width="200"
            prop="updatedTime"
            label="更新时间"
          ></el-table-column>
          <el-table-column label="操作" fixed="right" width="150">
            <template slot-scope="scope">
              <el-tooltip
                effect="dark"
                content="编辑"
                placement="top"
                :enterable="false"
              >
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
              </el-tooltip>
              <el-tooltip
                effect="dark"
                content="删除"
                placement="top"
                :enterable="false"
              >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </el-tooltip>
            </template>
          </el-table-column>
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
  //代理商明细
  name: 'agentDetail',
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
        status: '',
      },
      tableData: [
        {
          agentId: '111111',
          name: '一级代理商001',
          person: '张三',
          cellPhoneNumber: '1384569999',
          referralCode: '1111',
          positionRatio: 0.1,
          buyFeeRatio: 0.1,
          deferFeeRatio: 0.1,
          status: '已启用',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
          children: [
            {
              agentId: '222222',
              name: '二级代理商002',
              person: '李四',
              cellPhoneNumber: '1384569999',
              referralCode: '2222',
              positionRatio: 0.1,
              buyFeeRatio: 0.1,
              deferFeeRatio: 0.1,
              status: '已启用',
              createdTime: '2020-10-11',
              updatedTime: '2020-10-12',
            },
          ],
        },
        {
          agentId: '333333',
          name: '代理商003',
          person: '王五',
          cellPhoneNumber: '1384569999',
          referralCode: '3333',
          positionRatio: 0.1,
          buyFeeRatio: 0.1,
          deferFeeRatio: 0.1,
          status: '已启用',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          agentId: '444444',
          name: '代理商004',
          person: '刘六',
          cellPhoneNumber: '1384569999',
          referralCode: '4444',
          positionRatio: 0.1,
          buyFeeRatio: 0.1,
          deferFeeRatio: 0.1,
          status: '已启用',
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
          value: '1',
          label: '已启用',
        },
      ],
    }
  },
  methods: {
    //编辑用户打开dialog
    handleEdit(index, row) {},
    handleDelete(index, row) {
      var that = this
      this.$confirm('是否继续删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(function () {
        that.$message({
          type: 'success',
          message: '好的!',
        })
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    onSubmit() {
      console.log(this.formInline)
    },
    onReset() {
      this.formInline.mobile = ''
      this.formInline.name = ''
      this.formInline.status = ''
    },
    //获取数据
    getList() {},
    add() {
      console.log('add')
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