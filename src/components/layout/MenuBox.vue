<template>
  <div class="page-view">
    <v-header></v-header>
    <div class="menu-box">
      <v-sidebar></v-sidebar>
      <div class="view-wrapper all-transition">
        <div class="view-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSidebar from './Sidebar.vue';
import vHeader from './Header';
export default {
  data() {
    return {};
  },
  components: {
    vSidebar,
    vHeader
  },
  computed: {},
  beforeMount() {

  },
  mounted() {

  },
  methods: {}
};
</script>

<style lang="scss">
  @import '../../assets/scss/mixin';
  @import '../../assets/scss/theme';

  .view-wrapper {
    width: auto;
    position: absolute;
    top: 50px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    overflow: auto;
    margin-left: 180px;
  }

  .view-nav {
    position: absolute;
    top: 0px;
    bottom: 0px;
    background-color: #fff;
    @include animation(fadeIn, 0.5s);
    border-right: #E5E9F2 1px solid;
  }

  .view-nav-collapse {
    position: absolute;
    top: 50%;
    left: 160px;
    width: 20px;
    height: 50px;
    z-index: 5;
    margin-top: -25px;
  }

  /*未折叠的样式*/
  .view-nav-collapse-btn {
    position: absolute;
    top: 50%;
    right: 0;
    left: auto;
    transition: all 0.1s ease, 0.1s ease;
    color: $color-primary;
  }

  .view-nav-collapse-bg {
    width: 0;
    height: 68px;
    position: absolute;
    top: 0;
    transition: all 0.1s ease, 0.1s ease;
    right: 0;
    left: auto;
    border-bottom: 9px solid transparent;
    border-left: none;
    border-right: 20px solid #fff;
    border-top: 9px solid transparent;
  }

  .view-nav-collapse:hover .view-nav-collapse-bg {
    border-right-width: 23px;
  }

  .view-nav-collapse:hover .view-nav-collapse-btn {
    right: 3px;
  }

  /*折叠后的样式*/
  .view-collapse .view-nav-collapse-bg {
    left: 0;
    border-right: none;
    border-bottom: 9px solid transparent;
    border-left: 20px solid #D9DEE4;
    border-top: 9px solid transparent;
  }

  .view-collapse .view-nav-collapse:hover .view-nav-collapse-bg {
    border-left-width: 23px;
  }

  .view-collapse .view-nav-collapse-btn {
    left: 0;
    right: auto;
  }

  .view-collapse .view-nav-collapse:hover .view-nav-collapse-btn {
    left: 3px;
  }

  .view-body {
    width: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    overflow: hidden;
    overflow-y: auto;
    padding: 20px 40px 20px;
  }
</style>
