<template>
  <div id="app">
    <!-- loading 拉到最外層，可以讓所有頁面使用。 -->
    <div v-if="loading" class="loader loader-curtain is-active"></div>
    <div>
      <img src="static/images/images.jpg" alt="Frank">
    </div>

    <!--
      router-link 就像
      <a href="/c2f">CtoF</a>
      :to 裡面是物件形式，描述要轉跳的目的與需要帶的參數
      目的：考可以用 path 或 name
      在 main.js router 我們是這樣設定的：
      {
        path: '/hello',
        name: 'hello',
        component: Hello
      },
    -->
    <router-link :to="{path: '/HelloWorld'}">HelloWorld</router-link>
    <router-link :to="{name: 'c2f'}">CtoF</router-link>
    <router-link :to="{name: 'c2f_if'}">c2f_if</router-link>
    <router-link :to="{name: 'learnComponent'}">learnComponent</router-link>
    <router-link :to="{name: 'count'}">count</router-link>
    <router-link :to="{name: 'todo'}">todo</router-link>
    <router-link :to="{name: 'shop'}">shop</router-link>
    <router-link :to="{name: 'open1999'}">open1999</router-link>

    <!-- 轉跳後所載入的 component 最後會顯示在此 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'App',
    computed: mapGetters({
      // 取得 loading state
      loading: 'getLoading'
    }),
  }
</script>

<style>
  /* 載入 bootstrap - food blog template */
  @import url("../static/css/bootstrap.css");

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-moz-osx-font-smoothing: ;
    -moz-moz-osx-font-smoothing: ;
    -ms-moz-osx-font-smoothing: ;
    -o-moz-osx-font-smoothing: ;
    -khtml-moz-osx-font-smoothing: ;
    moz-osx-font-smoothing: ;: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
