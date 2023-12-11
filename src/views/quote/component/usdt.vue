<script setup>
import { onMounted, ref } from "vue";
import { getDetail } from "@/api/huobi.js";

const typeList = ref([
  {
    type: "btc",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "eth",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "ape",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "sol",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "doge",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "ht",
    price: "",
    parcent: "",
    up: 0,
  },
]);

const getDetails = () => {
  typeList.value.forEach(async (item) => {
    const { data: res } = await getDetail(item.type);
    item.price = res.tick.close;
    item.parcent = (((res.tick.close - res.tick.open) / res.tick.open)*100).toFixed(2)
    if(item.parcent>0){
        item.up=1
    }
    return item
  });
};

setInterval(()=>{
    getDetails()
},2000)

onMounted(()=>{
    getDetails()
})
</script>

<template>
  <div class="usdt">
    <div class="title">
      <span>种类</span>
      <span style="text-align: center">价格</span>
      <span style="text-align: right">涨跌幅</span>
    </div>
    <div class="box">
      <div v-for="(item,index) in typeList" :key="index">
        <span>{{item.type.toUpperCase()}}/USDT</span>
        <span style="text-align: center" :class="item.up==1?'up':'down'">{{item.price}}</span>
        <span style="text-align: right"><button :class="item.up==1?'up_btn':'down_btn'">{{item.parcent}}%</button></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.usdt {
  width: auto;
  height: auto;
  padding-bottom: 70px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    span {
      width: 33%;
    }
  }
  .box {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-weight: 600;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0px;
      span {
        width: 33%;
        font-size: 15px;
        button {
          width: 70px;
          height: 35px;
          font-size: 13px;
          font-weight: 500;
          border: 0;
          border-radius: 2px;
          color: #FFF;
        }
      }
      .up {
        color: #00b8a9;
      }
      .down {
        color: #e84545;
      }
      .up_btn {
        background: #00b8a9;
      }
      .down_btn {
        background: #e84545;
      }
    }
  }
}
</style>