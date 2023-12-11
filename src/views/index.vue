<script setup>
import { ref } from "vue";

const active = ref(0);
</script>

<template>
  <div class="index">
    <RouterView />
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home">
        <span class="material-symbols-outlined"> home </span
        ><br />首页</van-tabbar-item
      >
      <van-tabbar-item to="/quote">
        <span class="material-symbols-outlined"> monitoring </span
        ><br />行情</van-tabbar-item
      >
      <van-tabbar-item to="contract"
        ><span class="material-symbols-outlined"> list_alt </span><br />合约
      </van-tabbar-item>
      <van-tabbar-item to="mine"
        ><span class="material-symbols-outlined"> person </span
        ><br />我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>