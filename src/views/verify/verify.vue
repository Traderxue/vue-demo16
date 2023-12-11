<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="verify">
    <div class="header">
      <span
        class="material-symbols-outlined"
        @click="goBack"
        style="font-size: 20px"
      >
        arrow_back_ios
      </span>
      <span>身份认证</span><span></span>
    </div>
    <div class="banner">
      <h3>身份认证</h3>
      <div><span>姓名</span><input type="text" placeholder="请输入姓名"/></div>
      <div><span>手机号</span><input type="text" placeholder="请输入手机号"/></div>
      <div><span>身份证号</span><input type="text" placeholder="请输入身份证号"/></div>
      <button>提交审核</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.verify {
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
  .banner{
    margin-top: 20px;
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #f5f5f5;
    border-radius: 5px;
    padding: 20px 10%;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0px;
        border-bottom: 1px solid gray;
        span{
            font-size: 14px;
        }
        input{
            border: 0px;
            background: #f5f5f5;
            height: 35px;
            font-size: 14px;
        }
    }
    button{
        width: 100%;
        height: 35px;
        border: 0;
        border-radius: 3px;
        background: #FFBA0D;
        font-size: 13px;
        margin-top: 15px;
    }
  }
}
</style>