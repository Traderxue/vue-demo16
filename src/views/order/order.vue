<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const orderList = ref([
  {
    time:"2023/10/12 18:09:10",
    money:"113",
    topup:0
  },
  {
    time:"2023/10/12 18:09:10",
    money:"113",
    topup:1
  },
  {
    time:"2023/10/12 18:09:10",
    money:"113",
    topup:1
  },
  {
    time:"2023/10/12 18:09:10",
    money:"113",
    topup:0
  },
  {
    time:"2023/10/12 18:09:10",
    money:"113",
    topup:0
  },
  {
    time:"2023/10/12 18:09:10",
    money:"113",
    topup:1
  },
  {
    time:"2023/10/12 18:09:10",
    money:"113",
    topup:1
  },
  {
    time:"2023/10/12 18:09:10",
    money:"113",
    topup:0
  },
])

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="order">
    <div class="header">
      <span
        class="material-symbols-outlined"
        @click="goBack"
        style="font-size: 20px"
      >
        arrow_back_ios
      </span>
      <span>订单列表</span><span></span>
    </div>
    <div class="box" v-if="true">
      <div class="per" v-for="(item,index) in orderList" :key="index">
        <div><span>时间</span><span>{{item.time}}</span></div>
        <div><span>金额</span><span :class="item.topup==1?'topup':'withdraw'">{{item.money}} USDT</span></div>
        <div><span>操作</span><span :class="item.topup==1?'topup':'withdraw'">{{item.topup==1?"充值":"提现"}}</span></div>
      </div>
    </div>
    <div v-else>
      <van-empty description="暂无订单" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.order {
  width: auto;
  height: auto;
  padding: 15px 15px 70px 15px;
  font-size: 15px;
  .header {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box {
    margin-top: 15px;
    width: auto;
    height: auto;
    padding: 20px 10%;
    background: #f5f5f5;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 14px;
    .per{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      border-bottom: 1px solid gray;
      margin-bottom: 20px;
      div{
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        .topup{
          color: #00b8a9;
        }
        .withdraw{
          color: #e84545;
        }
      }
    }
  }
}
</style>