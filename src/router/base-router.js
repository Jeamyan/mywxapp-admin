/**
 * Created by luoyan on 2018/6/9.
 */
import Login from '@/components/login/Login';
import ResetPwd from '@/components/login/ResetPwd';

export default [
  {
    path: '/user',
    component: {
      template: '<router-view></router-view>'
    },
    children: [
      {
        path: 'login',
        component: Login,
        meta: {title: '用户登录', isRouter: true}
      },
      {
        path: 'resetPwd',
        component: ResetPwd,
        meta: {title: '重置密码', isRouter: true}
      }
    ]
  }
];
