import Vue from 'vue';
import Router from 'vue-router';

import baseRouters from './base-router';
import menuRouters from './menu-router';

Vue.use(Router);

const router = new Router({
  routes: [
    ...baseRouters,
    ...menuRouters
  ]
});

/**
 * 设置文档标题
 */
const setDocTitle = (title) => {
  if (!title) {
    title = '用户系统';
  }
  document.title = title;
};

/**
 * 全局路由导航钩子
 * @param to Route: 即将要进入的目标 路由对象
 * @param from  Route: 当前导航正要离开的路由
 * @param next  Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 * @returns {boolean}
 */
router.beforeEach((to, from, next) => {
  // 设置文档标题
  setDocTitle(to.meta.title);

  // 检测路由是否正确
  if (!to.meta.isRouter) {
    next({path: '/user/login'});
    return;
  }
  next();
});

export default router;
