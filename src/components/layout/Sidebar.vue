<!-- 侧边栏组件 -->
<template>
  <div class="sidebar" ref="sidebar" v-loading="loading">

    <el-menu :default-active="onRoutes" class="el-menu-vertical" background-color="#424c54" text-color="#dcdcdc"
             unique-opened ref="elMenuVertical">

      <template v-for="(item,index) in sidebarList">

        <router-link :to="{ path : item.path }" class="block" v-if="!item.children || item.children.length === 0"
                     :key="`one${index}`">
          <el-menu-item :index="`/${item.path}`">
            <i class="iconfont" :class="[item.icon]"></i>
            <span class="el-menu__text"> {{ item.meta.title }}</span>
          </el-menu-item>
        </router-link>

        <el-submenu :index="'index' + index" v-else :key="`index${index}`">

          <template slot="title">
            <i class="iconfont" :class="[item.icon]"></i>
            <span class="el-menu__text"> {{ item.meta.title }}</span>
          </template>

          <template v-for="(subItem,subIndex) in item.children">
            <router-link :to="{ path : subItem.path }" class="block" :key="`sub${subIndex}`">
              <el-menu-item :index="`${subItem.path}`" style="padding-left: 62px !important;">
                <span class="el-menu__text">{{ subItem.meta.title }}</span>
              </el-menu-item>
            </router-link>
          </template>

        </el-submenu>

      </template>

    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      loading: false
    };
  },
  beforeMount() {
  },
  computed: {
    ...mapGetters([
      'sidebarList'
    ]),
    onRoutes() {
      return this.$route.path;
    }
  },
  mounted() {
  },
  methods: {}
};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '.././../assets/scss/theme.scss';

  .sidebar {
    width: 180px;
    display: block;
    position: fixed !important;
    left: 0;
    top: 50px;
    bottom: 0;
    background-color: #424c54;
    padding-top: 15px;
    overflow-y: auto;
    .el-submenu .el-menu-item {
      outline: none;
      &.is-active {
        color: #ffffff;
        background-color: #409EFF !important;
      }
    }
    .el-loading-mask {
      background-color: transparent !important;
    }
  }

  .el-menu .iconfont {
    vertical-align: baseline;
    margin-right: 6px;
    font-size: 16px;
  }

</style>
