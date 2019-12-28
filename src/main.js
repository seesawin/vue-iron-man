import './assets/css/bootstrap/stylesheets/_bootstrap.scss';
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


