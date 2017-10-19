import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/login'
import index from '@/view/index/index'

import foodsList from '@/components/foodsList'
import c2 from '@/components/cb'
import c1 from '@/components/ca'



import restaurantList from '@/components/restaurant/restaurantList'
import restaurantAdd from '@/components/restaurant/restaurantAdd'
import restaurantEdit from '@/components/restaurant/restaurantEdit'










Vue.use(Router)

export default new Router({
  routes: [
		{ path: '/', redirect: '/login' },
		{ path: '/login', component: login },
		{ 
      path: '/index', 
      component: index,
      /*检测登录状态*/
      beforeEnter: (to, from, next) => {
        if (!sessionStorage.getItem('accessToken')) {
          next({path: '/login',query: { message: '未登录' }})
        } else {next()} 
      },
      /* 子路由*/
      children: [
        {path: 'restaurantList',component: restaurantList,meta: ['餐厅管理', '餐厅列表']},
        {path: 'restaurantAdd',component: restaurantAdd,meta: ['餐厅管理', '餐厅添加']},
        {path: 'restaurantEdit',component: restaurantEdit,meta: ['餐厅管理', '餐厅修改']},
        {path: 'c2',component: c2,meta: ['c2', 'c22222']},
        {path: 'c1',component: c1,meta: ['c1', 'c11111111111111']},
        {path: 'foodsList',component: foodsList,meta: ['菜品管理', '菜品列表']}
      ]
    }






  ]
})

