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
      <span
        class="material-symbols-outlined"
        @click="goBack"
        style="font-size: 20px"
      >
        arrow_back_ios
      </span>
      <span>安全中心</span><span></span>
    </div>
    <div class="box">
      <h3>修改密码</h3>
      <div><span>旧密码</span><input type="text" placeholder="请输入旧密码"></div>
      <div><span>新密码</span><input type="text" placeholder="请输入新密码"></div>
      <div><span>确认新密码</span><input type="text" placeholder="确认新密码"></div>
      <button>确认修改</button>
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
  .box{
    margin-top: 30px;
    width: auto;
    height: auto;
    box-sizing: border-box;
    padding: 20px 10%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #F5f5f5;
    border-radius: 5px;
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
            width: auto;
            height: 35px;
            box-sizing: border-box;
            border: 0;
            background: #F5f5f5;
            font-size: 14px;
        }
    }
    button{
        margin-top: 15px;
        width: 100%;
        height: 35px;
        border: 0;
        background: #FFBA0D;
        color: #FFF;
        font-size: 13px;
        border-radius: 3px;
    }
  }
}
</style>