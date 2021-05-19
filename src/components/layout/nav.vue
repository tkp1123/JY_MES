<template>
  <div>
    <el-menu
      background-color="#fff"
      text-color="#515a6e"
      active-text-color="#0074ff"
      unique-opened
      :router="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      :default-active="$route.path"
    >
      <template v-for="menu in menuList">
        <el-menu-item :index="'/' + menu.path" :key="menu.id">
          <i :class="menu.icon" style="font-size: 30px"></i>
          <div style="width: 100%; text-slign: center">
            {{ menu.autoName }}
          </div>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      menuList: [
        {
          id: '1',
          autoName: '首页',
          path: 'welcome',
          icon: 'iconfont icon-biaoqianA01_shouye-76',
        },
        {
          id: '2',
          autoName: '单据审核',
          path: 'order',
          icon: 'iconfont icon-danju',
        },
        {
          id: '3',
          autoName: '交易审核',
          path: 'trans',
          icon: 'iconfont icon-jiaoyijilu',
        },
        {
          id: '4',
          autoName: '统计',
          path: 'statistics',
          icon: 'iconfont icon-tongji',
        },
      ],
    }
  },

  mounted() {},
}
</script>
<style lang="less" scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.bbb {
  position: relative;
}
.ccc {
  padding-left: 23px;
  margin-top: 20px;
}
.ddd:active {
  background: #f7f7f7;
}
.img {
  width: 45px;
  height: 45px;
}
.img_show {
  height: 45px;
}
.iconfont {
  font-size: 18px;
}
.nav_title {
  color: #ffffff;
  min-height: 65px;
  font-size: 18px;
  font-weight: 500;
  background-color: #333744;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-menu--collapse {
  width: 80px;
}
.el-menu-item {
  padding: 0 !important;
}
.el-menu-item,
.el-submenu__title {
  height: 80px;
  line-height: 25px;
  padding-top: 20px !important;
}
.el-menu-item.is-active {
  background: #eef7ff !important;
}
</style>