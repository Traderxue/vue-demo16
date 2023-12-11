<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("login");

const register = () => {
  active.value = "register";
};

const login = () => {
  active.value = "login";
};

const goBack = () => {
    router.push("/home")
};
</script>

<template>
  <div class="box">
    <div class="header">
      <span class="material-symbols-outlined" @click="goBack">
        arrow_back_ios
      </span>
      <span></span>
    </div>
    <div class="login" v-if="active == 'login'">
      <div><span>用户名</span><input type="text" /></div>
      <div><span>密码</span><input type="password" /></div>
      <p>忘记密码?</p>
      <div class="nav"><span>登录</span><span @click="register">注册</span></div>
    </div>
    <div class="register" v-else>
      <div><span>用户名</span><input type="text" /></div>
      <div><span>密码</span><input type="password" /></div>
      <div><span>确认密码</span><input type="password" /></div>
      <div class="nav"><span>注册</span><span @click="login">登录</span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: auto;
  height: auto;
  padding: 15px;
  font-size: 15px;
  .header {
    display: flex;
    justify-content: space-between;
  }
  p{
    font-size: 13px;
    text-align: right;
    color: #3782FF;
    cursor: pointer;
  }
  .nav{
    box-sizing: border-box;
    padding: 0px 20%;
    color: #3782FF;
  }
  .login {
    width: 80%;
    height: auto;
    margin: 160px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    div {
      margin: 10px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input{
        border: 0;
        height: 35px;
        outline: none;
        border-bottom: 1px solid gray;
      }
    }
  }
  .register {
    width: 80%;
    height: auto;
    margin: 160px auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    div {
      margin: 10px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input{
        border: 0;
        height: 35px;
        outline: none;
        border-bottom: 1px solid gray;
      }
    }
  }
}
</style>