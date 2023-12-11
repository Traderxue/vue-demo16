<script setup>
import { onMounted, ref } from "vue";
import { getDepath } from "@/api/huobi.js";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("buy");
const activeBtn = ref("买入");
const type = ref("btc");
const bids = ref([]);

const asks = ref([]);

const buy = () => {
  active.value = "buy";
  activeBtn.value = "买入";
};

const sell = () => {
  active.value = "sell";
  activeBtn.value = "卖出";
};

const getDepaths = async () => {
  const { data: res } = await getDepath(type.value);
  bids.value = res.tick.bids;
  asks.value = res.tick.asks;
  console.log(res.tick.asks);
};

setInterval(() => {
  getDepaths();
}, 2000);


const goPosition = () =>{
  router.push("/position")
}

onMounted(() => {
  getDepaths();
});
</script>

<template>
  <div class="contract">
    <div class="header">
      <span>合约</span>
    </div>
    <div class="top">
      <div>
        <span class="material-symbols-outlined"> reorder </span>
        <span>{{ type.toUpperCase() }}/USDT</span>
      </div>
      <span class="material-symbols-outlined"> candlestick_chart </span>
    </div>
    <div class="banner">
      <div class="left">
        <div class="btn">
          <button class="buy_btn" @click="buy">买入</button
          ><button class="sell_btn" @click="sell">卖出</button>
        </div>
        <div class="select">
          <select name="" id="">
            <option value="">市价</option>
            <option value="">限价</option>
          </select>
        </div>
        <p>可用0.0000 USDT</p>
        <div class="amount">
          <input type="text" placeholder="0.0000" /><span>USDT</span>
        </div>
        <div class="last_btn">
          <button :class="active == 'buy' ? 'buy_btn' : 'sell_btn'">
            {{ activeBtn }}
          </button>
        </div>
      </div>
      <div class="right">
        <div class="title"><span>价格</span><span>数量</span></div>
        <div class="list">
          <div class="buy">
            <div v-for="(item, index) in bids" :key="index">
              <span>{{ item[0] }}</span
              ><span>{{ item[1].toFixed(3) }}</span>
            </div>
          </div>
          <div class="sell">
            <div v-for="(item, index) in asks" :key="index">
              <span>{{ item[0] }}</span>
              <span>{{ item[1].toFixed(3) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position">
      <div class="title">
        <p>当前持仓</p>
        <div @click="goPosition">
          <p>全部</p>
          <span class="material-symbols-outlined"> chevron_right </span>
        </div>
      </div>
      <div class="container">
        <div v-if="false">
          <RouterView />
        </div>
        <div v-else>
          <van-empty description="暂无持仓" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contract {
  width: auto;
  height: auto;
  padding: 15px;
  font-size: 15px;
  .header {
    text-align: center;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
    div {
      display: flex;
      align-items: center;
      margin-right: 5px;
    }
  }
  .banner {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    .left {
      width: 50%;
      height: auto;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      div {
        width: 100%;
        height: auto;
        margin: 5px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .btn {
        button {
          width: 45%;
          height: 35px;
          border: 0;
          color: #fff;
          font-size: 13px;
        }
      }
      .select {
        select {
          outline: none;
          width: 100%;
          height: 35px;
          border: 0;
          border-bottom: 1px solid gray;
        }
      }
      p {
        font-size: 13px;
        margin: 5px 0px;
      }
      .amount {
        box-sizing: border-box;
        overflow: hidden;
        border-bottom: 1px solid gray;
        font-weight: 600;
        color: #333;
        input {
          width: 70%;
          height: 35px;
          box-sizing: border-box;
          border: 0;
        }
      }
      .last_btn {
        margin: 10px 0px;
        button {
          width: 100%;
          height: 35px;
          border: 0;
          margin: 0 auto;
          color: #fff;
          font-size: 13px;
        }
      }
      .buy_btn {
        background: #00b8a9;
      }
      .sell_btn {
        background: #e84545;
      }
    }
    .right {
      width: 45%;
      height: auto;
      box-sizing: border-box;
      padding: 0px 10px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
      }
      .list {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        font-size: 13px;
        font-weight: 600;
        .buy {
          color: #00b8a9;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          div {
            margin: 2px 0px;
            padding: 2px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
        .sell {
          color: #e84545;
          margin-top: 5px;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          div {
            margin: 2px 0px;
            padding: 2px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
    }
  }
  .position {
    width: auto;
    height: auto;
    margin: 15px 0px;
    font-size: 14px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
}
</style>