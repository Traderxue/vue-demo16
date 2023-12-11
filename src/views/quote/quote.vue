<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("USDT");

const navList = ref([
  {
    path: "/usdt",
    title: "USDT",
  },
  {
    path: "/optional",
    title: "自选",
  },
]);

const changeNav = (item)=>{
    active.value = item.title
    router.push(item.path)
}
</script>

<template>
  <div class="quote">
    <div class="header">
      <span>行情</span>
    </div>
    <div class="banner">
      <span v-for="(item, index) in navList" :key="index" :class="active==item.title?'active':''" @click="changeNav(item)">{{
        item.title
      }}</span>
    </div>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.quote {
  width: auto;
  height: auto;
  padding: 15px;
  font-size: 15px;
  .header {
    width: auto;
    height: auto;
    text-align: center;
  }
  .banner {
    width: auto;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }
  .active {
    color: #e84545;
    font-weight: 600;
  }
  .container {
    width: auto;
    height: auto;
  }
}
</style>