import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import c2f from '@/components/c2f'
import c2f_if from '@/components/c2f_if'
import learnComponent from '@/pages/learnComponent'
import count from '@/pages/count'
import todo from '@/pages/todo'
import shop from '@/pages/shop'
import cart from '@/pages/cart'
import open1999 from '@/pages/open1999'
import login from '@/pages/login'
import store from "../store";

Vue.use(VueRouter)

// export default new VueRouter({
const router = new VueRouter({
// const router = new VueRouter({
  // 使用 HTML 5 模式（沒有 hash, ex: #/hello）
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true },
    }, {
      path: '/c2f',
      name: 'c2f',
      component: c2f,
      meta: { requiresAuth: true },
    }, {
      path: '/c2f_if',
      name: 'c2f_if',
      component: c2f_if,
      meta: { requiresAuth: true },
    }, {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent,
      meta: { requiresAuth: true },
    }, {
      path: '/count',
      name: 'count',
      component: count,
      meta: { requiresAuth: true },
    }, {
      path: '/todo',
      name: 'todo',
      component: todo,
      meta: { requiresAuth: true },
    }, {
      path: '/shop',
      name: 'shop',
      component: shop,
      meta: { requiresAuth: false },
      children: [ // 將會把對應到 path 的 component 放到 shop 的 <router-view />
        {
          path: 'cart', // url= shop/cart
          component: cart,
          meta: { requiresAuth: false },
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: { requiresAuth: false },
    },
    {
      path: '/open1999',
      name: 'open1999',
      component: open1999,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { requiresAuth: false },
    },{
      path: '/multiple',
      name: 'multiple',
      components: {
        viewLeft: shop,
        viewRight: cart,
      },
      meta: { requiresAuth: false },
    },
    { path: '/*', redirect: '/login' }
  ]
})

// 頁面轉跳驗證
router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to=', to.fullPath, '| from=', from.fullPath);
  if (to.matched.some(record => {
    console.log(record.name, record.meta.requiresAuth);
    return record.meta.requiresAuth;
  })) {
    // 如果沒有 token
    console.log('token?', store.state.token);
    if (store.state.token === '') {
      // 轉跳到 login page
      next({ path: '/login' });
    } else {
      next(); // 往下繼續執行
    }
  } else {
    next(); // 往下繼續執行
  }
});

export default router
