<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul
          class="cart-list"
          v-for="(cart, index) in shopCartList"
          :key="cart.id"
        >
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="cart.isChecked === 1"
              @click="updateOne(cart)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="changeSkuNum(cart, -1, 0)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
              @change="changeSkuNum(cart, $event.target.value * 1, 1)"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="changeSkuNum(cart, 1, 0)"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuPrice * cart.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="javascript:;" class="sindelet" @click="deleteOne(cart)"
              >删除</a
            >
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="isAllCheck" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:;" @click="deleteAll">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ checkedNum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ allMoney }}</i>
        </div>
        <div class="sumbtn">
            <router-link to="/trade" class="sum-btn">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import { mapState } from "vuex";
  export default {
    name: 'ShopCart',
 

  mounted() {
    this.getShopCartList();
  },
  methods: {
    getShopCartList(){
      this.$store.dispatch('getShopCartList')
    },

     // 修改购物车商品的数量
    async changeSkuNum(cart, disNum, flag) {

       // disNum可能拿到的是输入框输入的值，这个值不是变化的量，而最终修改完成后的值
     if (cart.skuNum + disNum < 1) {
          disNum = 1 - cart.skuNum;
      }
       try {
        const result = await this.$store.dispatch("addOrUpdateShopCart", {
          skuId: cart.skuId,
          skuNum: disNum,
        });
        if (result === "ok") {
          alert("修改购物车数量成功");
          this.getShopCartList();
        } else {
          alert("修改购物车商品数量失败");
        }
      } catch (error) {
        alert("修改购物车商品数量失败" + error.message);
      }
    },

     //修改购物车选中状态单个的
    async updateOne(cart) {
      //发请求把后端数据当中isChecked修改为取反的值
      try {
        const result = await this.$store.dispatch("updateCart", {
          skuId: cart.skuId,
          isChecked: cart.isChecked ? 0 : 1,
        });
        //修改成功 重新获取当前页面数据
        if (result === "ok") {
          alert("修改成功");
          this.getShopCartList();
        } else {
          alert("修改状态失败");
        }
      } catch (error) {
        //修改失败 提示
        alert("修改状态失败");
      }
    },

    // 删除单个的购物车信息
    async deleteOne(cart) {
      try {
        const result = await this.$store.dispatch("deleteCart", cart.skuId);
        if (result === "ok") {
          alert("删除成功");
          this.getShopCartList();
        } else {
          alert("删除失败");
        }
      } catch (error) {
        alert("删除失败");
      }
    },
    // 删除所有选中的
    async deleteAll(){
      try {
        await this.$store.dispatch('deleteCartAll')
        alert('删除成功')
        this.getShopCartList()
      } catch (error) {
        alert('删除失败')
      }
    }
  },

 
  computed: {
  ...mapState({
    shopCartList: (state) => state.shopcart.shopCartList,
  }),

   checkedNum() {
      return this.shopCartList.reduce((prev, item) => {
        if (item.isChecked) {
          prev += item.skuNum;
        }
        return prev;
      }, 0);
    },

    allMoney() {
      return this.shopCartList.reduce((prev, item) => {
        if (item.isChecked) {
          prev += item.skuNum * item.skuPrice;
        }
        return prev;
      }, 0);
    },



    isAllCheck: {
      get() {
        return (
          this.shopCartList.every((item) => item.isChecked) &&
          this.shopCartList.length > 0
        );
      },
      async set(val) {
        //要发请求 把所有的购物车信息选中状态全部改为，全选修改后的状态
        try {
          //this.$store.dispatch('updateCartAll',val?1:0) 是promise  是async函数的返回值promise 不是return后面的promise
          // async返回的promise成功和失败看的是return后面的promise
          //return后面的promise是成功的，那么async函数返回的promise就是成功的，成功的结果是return 后面promise 成功的结果
          const result = await this.$store.dispatch(
            "updateCartAll",
            val ? 1 : 0
          );
          alert("修改全选成功");
          this.getShopCartList();
        } catch (error) {
          alert("全选修改失败");
        }
      },
    },
  },
};
  
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }
        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>