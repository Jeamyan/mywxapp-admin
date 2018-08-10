<template>
  <div class="header">
    <div class="fl logo">
      <router-link to="/menu/overview">
        <router-link to="/menu/overview">
          <p class="logo-title inline-block"><img :src="logoUrl">管理后台</p>
        </router-link>
      </router-link>
    </div>

    <div class="fr dropdown-menu">
      <el-dropdown  @command="handleCommand">
        <span class="el-dropdown-link">
          管理员<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setting">个人设置</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="fr user-avater"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentUserInfo', 'sidebarList']),
    // logo图片url
    logoUrl() {
      return require('@/assets/img/logo.png');
    },
    // 用户名
    userName() {
      let userInfo = this.currentUserInfo;
      if (userInfo) {
        let userName = userInfo.userName;
        if (userInfo.isCompAdmin && userInfo.isCompUser) {
          userName = userName + '[管理员]';
        }
        return userName;
      }
    },
  },
  components: {},
  methods: {
    handleCommand(command) {
      if(command === 'setting'){
        console.log('mylog', command);
      }else if(command === 'logout'){
        this.$router.push({
          path: '/user/login'
        });
//      this.$store.dispatch('logout').then(() => {
//        this.$router.push('/user/login');
//      });
      }
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/scss/theme';

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    background-color: $color-primary;
    z-index: 10;
    .logo {
      float: left;
      text-align: left;
      height: 50px;
      margin-left: 20px;
      .logo-title {
        margin-left: 20px;
        font-size: 20px;
        color: #fff;
      }
      img {
        height: 30px;
        border-radius: 4px;
        vertical-align: middle;
        margin-right: 10px;
      }
      a {
        height: 100%;
      }
    }

  }

  .header.header-left {
    margin-left: 180px;
  }

  .header-icon {
    color: $color-primary;
  }

  .dropdown-menu{
    margin-right: 30px;
    .el-dropdown{
      color: #ffffff;
    }
    .user-avater{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: url('../../assets/img/default-header.png')no-repeat center center;
      background-size: 30px 30px;
      margin-top: 9px;
      margin-left: 4px;
    }
  }


</style>
