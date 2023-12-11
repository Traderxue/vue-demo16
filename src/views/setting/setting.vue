<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const input1 = ref("14785632586")
const input2 = ref("活泼")

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="setting">
    <div class="header">
      <span
        class="material-symbols-outlined"
        @click="goBack"
        style="font-size: 20px"
      >
        arrow_back_ios
      </span>
      <span>设置</span><span></span>
    </div>
    <div class="box">
      <div>
        <span>手机号</span><input type="text" v-model="input1">
      </div>
      <div>
        <span>实名认证</span><span>已认证</span>
      </div>
      <div>
        <span>标签</span><input type="text" v-model="input2">
      </div>
      <button>保存设置</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.setting {
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
  .box{
    margin-top: 20px;
    width: auto;
    height: auto;
    padding: 20px 10%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #F5f5f5;
    font-size: 14px;
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0px;
      input{
        border: 0;
        height: 30px;
        background: #F5F5F5;
        text-align: right;
      }
    }
    button{
      width: 100%;
      height: 35px;
      margin-top: 20px;
      border: 0;
      font-size: 13px;
      border-radius: 2px;
      color: #FFBA0D;
    }
  }
}
</style>