<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="security">
    <div class="header">
      <span class="material-symbols-outlined" @click="goBack" style="font-size:20px">
        arrow_back_ios
      </span>
      <span>安全中心</span><span></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.security {
  width: auto;
  height: auto;
  padding: 15px;
  font-size: 15px;
  .header {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>