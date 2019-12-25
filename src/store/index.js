import Vue from 'vue'
import Vuex from 'vuex'
// import {state, mutations} from './mutations.js'
// import * as getters from './getters.js'
// import * as actions from './actions.js'
//module引用store
import todo from './modules/todo';
import count from './modules/count';
import shop from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  // 將整理好的 modules 放到 vuex 中組合
  modules: {
    todo,
    count,
    shop
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});
