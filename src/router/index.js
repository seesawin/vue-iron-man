import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import c2f from '@/components/c2f'
import c2f_if from '@/components/c2f_if'
import learnComponent from '@/pages/learnComponent'
import count from '@/pages/count'
import todo from '@/pages/todo'
import shop from '@/pages/shop'
import cart from '@/pages/cart'
import open1999 from '@/pages/open1999'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/c2f',
      name: 'c2f',
      component: c2f
    }, {
      path: '/c2f_if',
      name: 'c2f_if',
      component: c2f_if
    }, {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent
    }, {
      path: '/count',
      name: 'count',
      component: count
    }, {
      path: '/todo',
      name: 'todo',
      component: todo
    }, {
      path: '/shop',
      name: 'shop',
      component: shop
    }, {
      path: '/cart',
      name: 'cart',
      component: cart
    }, {
      path: '/open1999',
      name: 'open1999',
      component: open1999
    }
  ]
})
