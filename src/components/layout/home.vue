<template>
  <el-container class="app-wrapper">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container class="container">
      <el-aside width="80px">
        <Nav></Nav>
      </el-aside>
      <el-main class="container_main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Nav from '@/components/layout/nav'
import Header from '@/components/layout/header'
export default {
  name: 'Home',
  components: {
    Nav,
    Header,
  },

  //store,
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="less" scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #6890e7;
  color: #f6f6f6;
  line-height: 60px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.el-aside {
  background-color: #fff;
  color: #828692;
  text-align: center;
  line-height: 600px;
  overflow-x: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 60px;
}
.el-container.is-vertical {
  flex-direction: row;
}
.container {
  margin-top: 60px;
}
.container_main {
  margin-left: 80px;
}
.el-main {
  background: #f7f7f7;
}
.el-main::-webkit-scrollbar {
  width: 2px;
}

/*滚动条滑块*/
.el-main::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #373d41;
}

/*滚动条轨道*/
.el-main::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  background: #fff;
}
</style>