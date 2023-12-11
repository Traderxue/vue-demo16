<script setup>
import {getDetail} from "@/api/huobi.js"
import { onMounted, ref } from "vue"

const typeList = ref([
    {
        type:"btc",
        price:"",
        parcent:"",
        up:0
    },
    {
        type:"eth",
        price:"",
        parcent:"",
        up:0
    },
    {
        type:"sol",
        price:"",
        parcent:"",
        up:0
    },
    {
        type:"ht",
        price:"",
        parcent:"",
        up:0
    },
    {
        type:"ape",
        price:"",
        parcent:"",
        up:0
    },
])

const getDetails =  ()=>{
    typeList.value.forEach(async item=>{
        const {data:res} = await getDetail(item.type)
        item.price = res.tick.close,
        item.parcent = ((res.tick.close - res.tick.open)/res.tick.open*100).toFixed(2)
        if(item.parcent>0){
            item.up=1
        }
        return item
    })
}

setInterval(()=>{
    getDetails()
},2000)

onMounted(()=>{
    getDetails()
})

</script>

<template>
  <div class="home">
    <div class="header">
      <span class="material-symbols-outlined"> menu </span><span>首页</span
      ><span class="material-symbols-outlined"> language </span>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="@/assets/img/banner1.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="@/assets/img/banner2.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="@/assets/img/banner3.png" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <hr />
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#fff"
        color="#000"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <hr />
    <div class="quickly">
      <div class="left">
        <h3>快捷买币</h3>
        <p>支持BTC、ETH、USDT等</p>
        <img src="@/assets/img/pay.png" alt="" />
      </div>
      <div class="right">
        <div>
          <img src="@/assets/img/buy.png" alt="" />
          <p>快捷购买</p>
        </div>
        <div>
          <img src="@/assets/img/kefu.png" alt="" />
          <p>联系客服</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="basic">
      <span></span>
      <h3>基础行情</h3>
    </div>
    <div class="market">
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
  </div>
</template>

<style scoped lang="scss">
.home {
  width: auto;
  height: auto;
  padding: 15px 15px 70px 15px;
  font-size: 15px;
  .header {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  hr {
    height: 10px;
    background-color: #f5f5f5;
    border: 0;
  }
  .banner {
    margin: 15px 0px;
    width: auto;
    height: 160px;
    img {
      width: 100%;
      height: 160px;
      border-radius: 3px;
    }
  }
  .notcie {
    margin-bottom: 10px;
  }
  .quickly {
    width: auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin: 15px 0px;
    .left {
      width: 60%;
      height: 100px;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      background: #f5f5f5;
      border-radius: 5px;
      position: relative;
      img {
        position: absolute;
        right: 40px;
        top: 10px;
        width: 60px;
        height: 40px;
      }
      p {
        font-size: 14px;
      }
    }
    .right {
      width: 35%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      div {
        height: 45%;
        width: 100%;
        background: #f5f5f5;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
  .basic {
    width: auto;
    height: 25px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    span {
      display: block;
      width: 5px;
      height: 25px;
      background: linear-gradient(to right bottom, #e84545, #00b8a9);
    }
    h3 {
      padding-left: 10px;
    }
  }
  .market {
    width: auto;
    height: auto;
    margin-top: 15px;
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
          button {
            width: 70px;
            height: 35px;
            border: 0;
            border-radius: 2px;
            color: #fff;
            font-weight: 500;
            font-size: 13px;
          }
        }
        .up{
            color: #00b8a9;
        }
        .down{
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
}
</style>