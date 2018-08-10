/**
 * Created by on 2018/6/9.
 */

'use strict';
import * as http from '@/common/require.js';
import api from '@/common/api.js';
// import router from '@/router/index.js';
import menuRouters from '@/router/menu-router';

export default {
  state: {
    currentUserInfo: null,
    isRouteViewShow: true,

    sidebarList: [...menuRouters] // 菜单列表
  },
  actions: {
    // 刷新路由视图
    refreshRouteView({commit}) {
      commit('setRouteViewShow', false);
      setTimeout(() => {
        commit('setRouteViewShow', true);
      }, 10);
    },
    getCurrentUserInfo({commit}) {
      return http.get(api.getCurrentUserInfo, {}, 'json').then(res => {
        if (!res.data) {
          return Promise.reject(res);
        }
        commit('setCurrentUserInfo', res.data);
        return res;
      });
    }
  },
  getters: {
    currentUserInfo(state) {
      return state.currentUserInfo;
    },
    sidebarList(state) {
      return state.sidebarList;
    }
  },
  mutations: {

  }
};
