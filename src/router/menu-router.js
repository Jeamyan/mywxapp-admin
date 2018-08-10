/**
 * Created by luoyan on 2018/6/11.
 */
import MenuBox from '@/components/layout/MenuBox'

// 异步加载路由组件 ， 创建页面
const createView = (fileName, name) => {
  return (resolve) => {
    return require([`@/views/${fileName}/${name}.vue`], resolve)
  }
}

export default [
  {
    path: '/report',
    icon: 'icon-shujutongji',
    component: MenuBox,
    meta: {title: '数据统计', isRouter: true},
    children: [
      {
        path: '/report/general',
        name: 'reportGeneral',
        icon: '',
        component: createView('report', 'general'),
        meta: {title: '概况', isRouter: true}
      }
    ]
  }, {
    path: '/product',
    icon: 'icon-shangpin',
    component: MenuBox,
    meta: {title: '商品管理', isRouter: true},
    children: [
      {
        path: '/product/list',
        name: 'proList',
        icon: '',
        component: createView('product', 'list'),
        meta: {title: '商品列表', isRouter: true}
      },
      {
        path: '/product/edit',
        name: 'proEdit',
        icon: '',
        component: createView('product', 'edit'),
        meta: {title: '新增商品', isRouter: true}
      },
      {
        path: '/product/category',
        name: 'proCategory',
        icon: '',
        component: createView('product', 'category'),
        meta: {title: '商品分类', isRouter: true}
      }
    ]
  }, {
    path: '/order',
    icon: 'icon-dingdan',
    component: MenuBox,
    meta: {title: '订单管理', isRouter: true},
    children: [
      {
        path: '/order/list',
        name: 'orderList',
        icon: '',
        component: createView('order', 'list'),
        meta: {title: '订单列表', isRouter: true}
      }
    ]
  }, {
    path: '/banner',
    icon: 'icon-lunbotu',
    component: MenuBox,
    meta: {title: '轮播图管理', isRouter: true},
    children: [
      {
        path: '/banner/list',
        name: 'bannerList',
        icon: '',
        component: createView('banner', 'list'),
        meta: {title: '轮播图列表', isRouter: true}
      }
    ]
  }
]
