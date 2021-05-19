<template>
  <el-header>
    <div class="header_text">xxx工作台</div>
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
  width: 45px;
  border-radius: 50%;
  margin: 10px;
  float: right;
}
.navbar {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  width: 100%;
  position: relative;
}
.el-dropdown {
  font-size: 18px;
}
.header_text {
  font-weight: 700;
  padding-left: 50px;
}
</style>