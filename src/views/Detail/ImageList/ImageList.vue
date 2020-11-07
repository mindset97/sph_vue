<template>
  <div class="swiper-container"  ref="imgSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in imgList" :key="img.id">
        <img
          :src="img.imgUrl"
          :class="{ active: defaultIndex === index }"
             @click="changeDefaultIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default {
    name: "ImageList",
    props: ["imgList"],
      data() {
    return {
      defaultIndex: 0,
    };
  },

    methods: {
    //点击图片列表当中的图片切换选中橙色框
    //并且需要把点击的图片的下标传递给zoom，zoom当中需要展示的图片下标和点击的这个小图下标是一样的
    changeDefaultIndex(index) {
      this.defaultIndex = index;
      this.$bus.$emit("changeDefaultIndex", index);
    },


    
  },

    watch: {
    imgList: {
      immediate: true, //在listContainer组件轮播图当中没有任何用，只是为了让和floor代码保持一致
      handler(newVal, oldVal) {
        //在页面最近一次更新完成之后执行$nextTick传递的回调函数
        //updated 这个钩子也是页面数据更新完成执行，但是不是一次，只要页面数据有更新它就会执行
        this.$nextTick(() => {
          new Swiper(this.$refs.imgSwiper, {
            slidesPerView: 5,
            slidesPerGroup: 5,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },


  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        // &:hover {
        //   border: 2px solid #f60;
        //   padding: 1px;
        // }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>