<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const positionList = ref([
    {
        time:"2023/12/11 10:15:02",
        type:"BTC",
        profit:"+15",
        up:1
    },
    {
        time:"2023/12/11 10:15:02",
        type:"ETH",
        profit:"-27",
        up:0
    },
    {
        time:"2023/12/11 10:15:02",
        type:"BTC",
        profit:"+35",
        up:1
    },
    {
        time:"2023/12/11 10:15:02",
        type:"BTC",
        profit:"+15",
        up:1
    },
    {
        time:"2023/12/11 10:15:02",
        type:"ETH",
        profit:"-27",
        up:0
    },
    {
        time:"2023/12/11 10:15:02",
        type:"BTC",
        profit:"+35",
        up:1
    },
    {
        time:"2023/12/11 10:15:02",
        type:"BTC",
        profit:"+15",
        up:1
    },
    {
        time:"2023/12/11 10:15:02",
        type:"ETH",
        profit:"-27",
        up:0
    },
    {
        time:"2023/12/11 10:15:02",
        type:"BTC",
        profit:"+35",
        up:1
    },
    {
        time:"2023/12/11 10:15:02",
        type:"BTC",
        profit:"+15",
        up:1
    }

])

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="position">
    <div class="header">
      <span
        class="material-symbols-outlined"
        @click="goBack"
        style="font-size: 20px"
      >
        arrow_back_ios
      </span>
      <span>持仓记录</span><span></span>
    </div>
    <div class="box" v-if="true">
        <div class="per" v-for="(item,index) in positionList" :key="index">
            <div><span>时间</span><span>{{item.time}}</span></div>
            <div><span>种类</span><span>{{item.type}}/USDT</span></div>
            <div><span>结果</span><span :class="item.up==1?'up':'down'">{{item.profit}} USDT</span></div>
        </div>
    </div>
    <div v-else>
        <van-empty description="暂无持仓" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.position {
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
    padding: 20px 10%;
    background: #f5f5f5;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;
    .per{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        border-bottom: 1px solid gray;
        padding-bottom: 8px;
        margin: 10px 0px;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2px 0px;
            .up{
                color: #00b8a9;
            }
            .down{
                color: #e84545;
            }
        }
    }
  }
}
</style>