// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入 store 資料夾（上面五隻 js ）
// 預設會去找 index.js  如果沒有的話會報錯！
// 我們在上一個範例已經組合所有指揮挺了！！
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  // 加入 store
  store,
  components: { App },
  template: '<App/>'
})
