// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/scss/common.scss';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/';

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 自定义组件
import * as VUI from '@/components/v-ui/src';

// 引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

// 兼容 requestAnimationFrame api
import '@/common/reqAnimFrame';

import * as filters from '@/common/filters';

Vue.config.productionTip = false;

Vue.use(VUI);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);

// 自定义过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
