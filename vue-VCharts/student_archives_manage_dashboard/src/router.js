import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/Index'),
      redirect: {
        name: 'home'
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home')
        },
        {
          path: '/FileManagement',
          name: 'FileManagement',
          component: () => import('./views/FileManagement')
        },
        {
          path: '/admin',
          name: 'admin',
          component: () => import('./views/Admin')
        }
      ]
    }
  ]
})
