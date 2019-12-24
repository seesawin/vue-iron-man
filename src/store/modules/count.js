const types = {
  INCREASE: 'count/INCREASE',
  DECREASE: 'count/DECREASE',
  COUNT_RESET: 'count/COUNT_RESET',
}

export const state = {
  count: 0,
};

const getters = {
  getCount (state) {
    return state.count
  }
}

const actions = {
  actionIncrease ({commit}, num) {
    commit(types.INCREASE, num);
  },
  actionDecrease ({commit}, num) {
    console.log('actionDecrease', num);
    commit(types.DECREASE, num);
  },
  actionCountReset ({commit}) {
    console.log('actionCountReset');
    commit(types.COUNT_RESET);
  },
}

export const mutations = {
  [types.INCREASE](state, num) {
    // 第二個參數是接收 commit 傳遞的值: num
    // 計算邏輯，改變 state
    state.count += parseInt(num);
    console.log('INCREASE', num, 'state?', state.count);
  },
  [types.DECREASE](state, num) {
    state.count -= parseInt(num);
    console.log('DECREASE', num, 'state?', state.count);
  },
  [types.COUNT_RESET](state) {
    // 歸零，就將 state 設定為 0 囉!
    state.count = 0;
    console.log('COUNT_RESET - state?', state.count);
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
