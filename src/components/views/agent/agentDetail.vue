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
    <!-- dialog对话框    添加代理商-->
    <el-dialog
      title="添加代理商"
      :visible.sync="dialogVisible"
      width="50%"
      top="10vh"
    >
      <el-form ref="form" :model="form" label-width="100px" :rules="rules">
        <el-form-item label="登录ID" prop="loginId">
          <el-input v-model="form.loginId"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd" type="text"></el-input>
        </el-form-item>
        <el-form-item label="代理商名称" prop="nickName">
          <el-input v-model="form.nickName"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="cellPhoneNumber">
          <el-input v-model="form.cellPhoneNumber" type="phone"></el-input>
        </el-form-item>
        <el-form-item label="联系人" prop="person">
          <el-input v-model="form.person" type="text"></el-input>
        </el-form-item>
        <el-form-item label="推荐码" prop="referralCode">
          <el-input v-model="form.referralCode" type="number"></el-input>
        </el-form-item>
        <el-form-item label="头寸比率" prop="positionRatio">
          <el-input v-model="form.positionRatio" type="number"></el-input>
        </el-form-item>
        <el-form-item label="手续费比率" prop="buyFeeRatio">
          <el-input v-model="form.buyFeeRatio" type="number"></el-input>
        </el-form-item>
        <el-form-item label="递延费比率" prop="deferFeeRatio">
          <el-input v-model="form.deferFeeRatio" type="number"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDataReset()">取 消</el-button>
        <el-button type="primary" @click="dialogOk()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  //代理商明细
  name: 'agentDetail',
  data() {
    var checkPhone = function (rule, value, callback) {
      const regPhone = /^1(3|4|5|6|7|8|9)\d{9}$/
      if (regPhone.test(value)) {
        return callback()
      } else {
        return callback(new Error('手机号码不合法'))
      }
    }
    return {
      queryInfo: '',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      dialogVisible: false,
      formInline: {
        mobile: '',
        name: '',
        status: '',
      },
      form: {
        loginId: '',
        nickName: '',
        pwd: '',
        cellPhoneNumber: '',
        person: '',
        referralCode: '',
        positionRatio: '',
        buyFeeRatio: '',
        deferFeeRatio: '',
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
      rules: {
        loginId: [
          {
            required: true,
            message: '请输入登录ID',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur',
          },
        ],
        nickName: [
          {
            required: true,
            message: '请输入代理商名称',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur',
          },
        ],
        pwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur',
          },
        ],
        cellPhoneNumber: [
          {
            required: true,
            message: '请输入手机号码',
            trigger: 'blur',
          },
          {
            validator: checkPhone,
            trigger: 'blur',
          },
        ],
        person: [
          {
            required: true,
            message: '请输入联系人',
            trigger: 'blur',
          },
        ],
        referralCode: [
          {
            required: true,
            message: '请输入推荐码',
            trigger: 'blur',
          },
        ],
        positionRatio: [
          {
            required: true,
            message: '请输入头寸比率',
            trigger: 'blur',
          },
        ],
        buyFeeRatio: [
          {
            required: true,
            message: '请输入手续费比率',
            trigger: 'blur',
          },
        ],
        deferFeeRatio: [
          {
            required: true,
            message: '请输入递延费比率',
            trigger: 'blur',
          },
        ],
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
      this.formInline.mobile = ''
      this.formInline.name = ''
      this.formInline.status = ''
    },
    //获取数据
    getList() {},
    add() {
      this.dialogVisible = true
    },
    //添加代理商确定
    dialogOk() {
      var that = this
      this.$refs.form.validate(function (valid) {
        console.log(valid)
        if (valid) {
          //这里表示校验成功,提交数据,关闭dialog,还需要刷新列表form
          that.$message.success('成功了')
          //成功了以后还需要重置dialog内已填入的数据
          //注意这里还需要区分,接口数据返回成功还是失败,成功关闭dialig并且
          //重置数据,不成功不能重置和关闭dialog,并且弹出提示
          that.dialogVisible = false
          that.$refs.form.resetFields()
        } else {
          //这里表示校验失败,需要提示
          that.$message.error('出错了')
        }
      })
    },
    //添加用户关闭dialog 和重置dialog数据
    dialogDataReset() {
      this.dialogVisible = false
      this.$refs.form.resetFields()
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