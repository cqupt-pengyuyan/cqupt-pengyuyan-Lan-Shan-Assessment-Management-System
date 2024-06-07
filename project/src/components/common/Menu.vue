<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu
      router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#409eff"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" :key="item.name" v-if="!item.hidden">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group v-for="(child, index) in item.children" :key="index">
              <el-menu-item :index="child.path">
                {{child.name}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus:[]
    };
  },
  created(){
    console.log(this.$router.options.routes)
    this.menus=[...this.$router.options.routes]
  }
}
</script>


<style lang="less">
.menu {
}
.el-submenu .el-menu-item {
  min-width: 0;
}
.el-menu {
  height: 100%;
}
.el-aside {
  height: 100%;
}
</style>
