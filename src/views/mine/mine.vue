<template>
  <div class="mine">
    <div class="header">
      <span>我的 </span>
    </div>
    <div class="banner">
      <div class="top">
        <span>我的资产</span>
        <h3>10310.15 USDT</h3>
      </div>
      <hr />
      <div class="bottom">
        <div>
          <p>昨日收益(USDT)</p>
          <span>1031.15</span>
        </div>
        <div>
          <p>今日收益(USDT)</p>
          <span>1031.45</span>
        </div>
      </div>
    </div>
    <div class="withdraw">
      <div>
        <img src="@/assets/img/cz.png" alt="">
        <span>充值</span>
      </div>
      <div>
        <img src="@/assets/img/tixian.png" alt="">
        <span>提现</span>
      </div>
    </div>
    <div class="list">
      <div class="box">
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mine {
  width: auto;
  height: auto;
  padding: 15px;
  font-size: 15px;
  .header {
    text-align: center;
  }
  .banner {
    width: auto;
    height: 180px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: linear-gradient(to right bottom,#e84545,#00b8a9);
    border-radius: 5px;
    margin: 10px 0px;
    color: #FFF;
    hr{
      border: none;
      border-top: 2px dashed #FFF;
    }
    .top{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      span{
        font-size: 14px;
      }
      h3{
        margin-top: 5px;
      }
    }
    .bottom{
      width: auto;
      height: auto;
      display: flex;
      justify-content: space-between;
      div{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        p{
          font-size: 14px;
          padding: 5px 0px;
        }
        span{
          font-size: 14px;
        }
      }
    }
  }
  .withdraw{
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
    div{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      img{
        width: 40px;
        height: 40px;
      }
      span{
        font-size: 14px;
      }
    }
  }
}
</style>