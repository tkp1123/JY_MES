<template>
  <div class="login-container">
    <div class="login-box">
      <!-- <div class="avatar-box">
        <img src="@/assets/logo.png" />
      </div> -->
      <div class="login-top">
        <span>后台管理系统登录</span>
        <span class="bg1"></span>
        <span class="bg2"></span>
      </div>
      <el-form
        label-width="0px"
        class="login_form"
        :model="form"
        :rules="rules"
        ref="form"
      >
        <el-form-item prop="nick">
          <el-input
            prefix-icon="iconfont icongerenzhongxin"
            v-model="form.nick"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont iconmima"
            v-model="form.password"
            type="password"
          ></el-input>
        </el-form-item>
        <div class="btns">
          <el-button
            type="primary"
            size="medium"
            round
            class="btns_button"
            @click="submitForm('form')"
            >登 录</el-button
          >
        </div>
      </el-form>
    </div>
    <div class="footer">
      ©版权所有 2014-2018 tkp<span class="padding-5">|</span
      ><a target="_blank" href="https://github.com/tkp1123"
        >粤ICP备88888888号</a
      >
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/utils/api'
export default {
  //登录
  name: 'login',
  data() {
    return {
      form: {
        nick: '123456',
        password: '123456',
      },
      rules: {
        nick: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  mounted() {},
  methods: {
    submitForm(form) {
      var that = this
      this.$refs[form].validate(function (valid) {
        if (!valid) return that.$message.error('出错了')
        //登录
        loginAPI(that.form).then((res) => {
          console.log(res)
          if (res.resultCode == 0) {
            that.$store.commit('user/SET_TOKEN', res.data.accessToken)
            that.$router.push('/home')
          }
        })
      })
    },
    resetForm(form) {
      this.$refs[form].resetFields()
    },
  },
}
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  background-color: #2b4b6b;
  background-image: url('../../../assets/loginbg.png');
  background-size: 100% 100%;
}

.login-box {
  width: 450px;
  height: 500px;
  background-color: #fff;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.btns {
  display: flex;
  justify-content: center;
  padding-top: 60px;
}
.btns_button {
  width: 80%;
}
.el-form-item__content {
  width: 100%;
}
.login-box .login-top {
  height: 117px;
  background-color: #373d41;
  border-radius: 30px 30px 0 0;
  font-family: SourceHanSansCN-Regular;
  font-size: 30px;
  font-weight: 400;
  font-stretch: normal;
  letter-spacing: 0;
  color: #fff;
  line-height: 117px;
  text-align: center;
  overflow: hidden;
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  -ms-transform: rotate(0);
  -o-transform: rotate(0);
  transform: rotate(0);
}

.login-box .login-top .bg1 {
  display: inline-block;
  width: 74px;
  height: 74px;
  background: #fff;
  opacity: 0.1;
  border-radius: 0 74px 0 0;
  position: absolute;
  left: 0;
  top: 43px;
}
.login-box .login-top .bg2 {
  display: inline-block;
  width: 94px;
  height: 94px;
  background: #fff;
  opacity: 0.1;
  border-radius: 50%;
  position: absolute;
  right: -16px;
  top: -16px;
}
.login_form {
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 20px 50px 20px;
  box-sizing: border-box;
}
.el-form-item {
  margin-bottom: 32px;
}
.textCenter {
  text-align: center;
}
.footer {
  left: 0;
  bottom: 0;
  color: #fff;
  width: 100%;
  position: absolute;
  text-align: center;
  line-height: 30px;
  padding-bottom: 10px;
  text-shadow: #000 0.1em 0.1em 0.1em;
  font-size: 14px;
}
</style>
