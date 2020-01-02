<template>
  <div id="login">
<!--    <img src="static/images/ironman2017.jpg" class="responsive-img">-->
    <div class="container">
      <div class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="email" class="sr-only">Email address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="form-control"
          placeholder="Email address" required autofocus />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          v-model="password"
          @keyup.enter="login"
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password" required />
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          @click="login">
          Sign in
        </button>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: 'vue_vuex2@ironman2017.tw',
        password: '',
      }
    },
    methods: {
      login () {
        // 因為 action 包裝了 Promise 所以可以使用 then 和 catch 來接收非同步回傳狀態
        this.$store.dispatch('actionLogin', {
          email: this.email,
          password: this.password
        })
          .then(() => { // 接收 resolve
            console.log('3. get Promise resolve');
            setTimeout(() => {
              // 使用 $router.push 轉跳到 hello Page
              this.$router.push('/HelloWorld');
            }, 1000);
          })
          .catch(() => { // 接收 reject
            console.log('error get Promise reject!');
          });
      }
    }
  }
</script>

<style lang="scss">
  .responsive-img {
    width: 100%;
  }

  #login {
    padding-bottom: 40px;
  }
  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }
  .form-signin .checkbox {
    font-weight: normal;
  }
  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  /* switch */
  $switch-width: 160px;
  $switch-labal-width: 80px;
  $switch-background: #a4daff;
  $switch-font-color: #333;
  .slideThree {
    width: $switch-width;
    height: 26px;
    background: $switch-background;
    position: relative;
    border-radius: 50px;
    box-shado: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,0.2);
    &:after {
      content: 'English';
      color: $switch-font-color;
      position: absolute;
      right: 12px;
      z-index: 0;
      font-size: 12px;
      line-height: 26px;
      text-shadow: 1px 1px 0px rgba(255,255,255,.15);
    }
    &:before {
      content: '繁體';
      color: $switch-font-color;
      position: absolute;
      left: 24px;
      z-index: 0;
      font-size: 12px;
      line-height: 26px;
    }
    label {
      display: block;
      width: $switch-labal-width;
      height: 20px;
      cursor: pointer;
      position: absolute;
      top: 3px;
      left: 3px;
      z-index: 1;
      background: #fcfff4;
      background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
      border-radius: 50px;
      transition: all 0.4s ease;
      box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.3);
    }
    input[type=checkbox] {
      visibility: hidden;
      &:checked + label {
        left: 78px;
      }
    }
  }
</style>
