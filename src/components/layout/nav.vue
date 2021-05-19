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
        <el-menu-item :index="menu.path" :key="menu.id" class="menu-item-class">
          <i :class="menu.icon" style="font-size: 30px"></i>
          <div class="text-cen">
            {{ menu.autoName }}
          </div>
        </el-menu-item>
        <!-- <el-submenu :index="menu.id + ''" v-if="menu.children" :key="menu.id">
          <template slot="title">
            <i :class="menu.icon" style="font-size: 30px"></i>
            <div style="width: 100%; text-slign: center">
              {{ menu.autoName }}
            </div>
          </template>
          <el-menu-item
            v-for="child in menu.children"
            :index="'/' + child.path"
            :key="child.id"
          >
            <i class="el-icon-menu"></i>
            <span>{{ child.autoName }}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          :index="'/' + menu.path"
          :key="menu.id"
          v-else
          class="menu-item-class"
        >
          <i :class="menu.icon" style="font-size: 30px"></i>
          <div style="width: 100%; text-slign: center">
            {{ menu.autoName }}
          </div>
        </el-menu-item> -->
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
          path: '/welcome',
          icon: 'iconfont icon-biaoqianA01_shouye-76',
        },
        {
          id: '2',
          autoName: '订单管理',
          path: '/order',
          icon: 'iconfont icon-danju',
        },
        {
          id: '3',
          autoName: '生产调度',
          path: '/dispatch',
          icon: 'iconfont icon-tiaoduguanli',
        },
        {
          id: '4',
          autoName: '统计',
          path: '/statistics',
          icon: 'iconfont icon-tongji',
        },
        {
          id: '5',
          autoName: '产线监控',
          path: '/monitor',
          icon: 'iconfont icon-jiankong',
        },
        {
          id: '6',
          autoName: '系统配置',
          path: '/configuration',
          icon: 'iconfont icon-yonghupeizhi',
        },
        {
          id: '7',
          autoName: '设备管理',
          path: '/equipment',
          icon: 'iconfont icon-shebei',
        },
        {
          id: '8',
          autoName: '系统参数',
          path: '/parameter',
          icon: 'iconfont icon-canshu',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
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
// .el-menu-item {
//   height: 90px;
//   line-height: 25px;
//   padding-top: 20px !important;
// }
.el-menu-item.is-active {
  background: #eef7ff !important;
  border-left: 3px solid #0074ff;
}
/deep/ .el-submenu__title {
  height: 80px;
  line-height: 1.5;
  position: relative;
  padding: 0 !important;
}
.menu-item-class {
  height: 90px;
  line-height: 25px;
  padding-top: 20px !important;
}
.text-cen {
  width: 100%;
  text-align: center;
}
</style>