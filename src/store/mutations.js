import * as types from './mutations_types.js'

// state
export const state = {
  count: 0,
  todos: [
    {key: 0, content: 'vue.js 2.0', done: false},
    {key: 1, content: 'vuex 2.0', done: false},
    {key: 2, content: 'vue-router 2.0', done: false},
    {key: 3, content: 'vue-resource 2.0', done: false},
    {key: 4, content: 'webpack', done: false}
  ]
};

// 這邊簡單做一個 todo 的流水 key
// 預設值是 todos 的長度
let todoKey = state.todos.length;

// mutations
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
  [types.ADD_TODO](state, newTodo) {
    // todos 是一個 Array 所以 push 一個同結構的 Object
    state.todos.push({
      key: todoKey, // 流水 key
      content: newTodo, // 新 todo 的內容
      done: false // 預設當然是未做完
    });

    // 流水 key +1
    todoKey++;
  },
  // 改變狀態
  // [types.TOGGLE_TODO](state, key) {
  //   for (var i in state.todos) {
  //     var item = state.todos[i];
  //     if (item.key === key) {
  //       item.done = !item.done;
  //       console.log('TOGGLE_TODO:', item.content, 'done?', item.done);
  //       break;
  //     }
  //   }
  // },
  // 刪除
  [types.DELETE_TODO](state, key) {
    for (var i in state.todos) {
      var item = state.todos[i];
      if (item.key === key) {
        console.log('DELETE_TODO:', item.content, ', index?', i);
        state.todos.splice(i, 1);
        break
      }
    }
  },
  // 更新
  [types.UPDATE_TODO](state, obj) {
    for (var i in state.todos) {
      var item = state.todos[i];
      if (item.key === obj.key) {
        console.log('UPDATE_TODO:', item.content, ' to →', obj.change);
        // 找到 todo 更新 content
        state.todos[i].content = obj.change;
        break;
      }
    }
  },
  [types.TOGGLE_TODO] (state, obj) {
    for(var i in state.todos){
      var item = state.todos[i];
      if ( item.key === obj.key){
        item.done = obj.checked; //直接使用 chenkbox $emit 的 value
        console.log('TOGGLE_TODO:', item.content, '| obj.checked?', obj.checked, '| done?', item.done);
        break;
      }
    }
  },
}
