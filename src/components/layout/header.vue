<template>
  <el-header class="navbar">
    <div class="header_left">xxxx平台</div>

    <div class="header_right">
      <el-dropdown>
        <i class="el-icon-user" style="color: #fff; font-size: 16px"></i>
        <span style="color: #fff; font-size: 14px"
          >管理员<i
            class="el-icon-arrow-down el-icon--right"
            style="font-size: 12px"
          ></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <i class="icon iconfont icon-user"></i>
            <span class="icon-span">个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <i class="icon iconfont icon-edit-square"></i>
            <span class="icon-span">修改资料</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="loginout">
            <i class="icon iconfont icon-poweroff"></i>
            <span class="icon-span">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script>
export default {
  computed: {
    getCollapse() {
      return this.$store.state.isCollapse
    },
  },
  data() {
    return {
      user: '',
    }
  },
  methods: {
    loginout() {
      var that = this
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(function () {
        window.localStorage.clear()
        that.$router.push('/login')
        that.$message({
          type: 'success',
          message: '退出成功!',
        })
      })
    },
    pointClick() {
      this.$store.commit('collapse')
    },
  },
}
</script>
<style lang="less" scoped>
.img {
  width: 45px;
  height: 45px;
}
.iconfont {
  margin-right: 10px;
  font-size: 25px;
}
.toggle_button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.head-portrait {
  width: 40px;
  border-radius: 50%;
  margin: 10px;
  float: right;
}
.navbar {
  display: block;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  width: 100%;
  justify-items: center;
  position: relative;
}

.el-dropdown-text {
  padding-right: 50px;
}
.header_left {
  font-weight: 700;
  padding-left: 50px;
  float: left;
}
.header_right {
  float: right;
  padding-right: 10px;
}
</style>