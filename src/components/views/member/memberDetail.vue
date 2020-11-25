<template>
  <div>
    <el-card class="box-card">
      <el-page-header @back="goBack" content="会员列表"></el-page-header>
      <el-row :gutter="30">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="手机号">
            <el-input
              v-model="formInline.mobile"
              placeholder="手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="会员名称">
            <el-input
              v-model="formInline.name"
              placeholder="会员名称"
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
            <!-- <el-button type="primary" icon="el-icon-plus" @click="add"
              >新增</el-button
            > -->
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            width="200"
            prop="agentName"
            label="所属代理商"
          ></el-table-column>
          <el-table-column prop="name" label="会员名称"></el-table-column>
          <el-table-column
            prop="cellPhoneNumber"
            label="手机号"
          ></el-table-column>
          <el-table-column prop="idcard" label="身份证号"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column
            prop="createdTime"
            label="创建时间"
          ></el-table-column>
          <el-table-column
            prop="updatedTime"
            label="更新时间"
          ></el-table-column>
          <el-table-column label="操作">
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
  //会员明细
  name: 'memberDetail',
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
          agentName: '二级代理商002',
          name: '陈胜',
          cellPhoneNumber: '1386345678',
          idcard: '452726198883136',
          status: '已启用',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          agentName: '一级级代理商001',
          name: '吴广',
          cellPhoneNumber: '1862346546',
          idcard: '4408198305071239',
          status: '已启用',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          agentName: '三级代理商003',
          name: '范增',
          cellPhoneNumber: '13542384849',
          idcard: '45272619888313621',
          status: '已启用',
          createdTime: '2020-10-11',
          updatedTime: '2020-10-12',
        },
        {
          agentName: '二级代理商004',
          name: '樊哙',
          cellPhoneNumber: '1373454667',
          idcard: '45272619789345341',
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

      condition: {
        loginId: '',
        nickName: '',
        status: '',
      },
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
      this.formInline.name = ''
      this.formInline.mobile = ''
      this.formInline.status = ''
    },
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