<template>
  <div class="swiper-container" ref="bannerSwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(banner, index) in bannerList"
        :key="banner.id"
      >
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "",
  props:['bannerList'],
  watch: {
    bannerList: {
      immediate:true, //在listContainer组件轮播图当中没有任何用，只是为了让和floor代码保持一致
      handler(newVal, oldVal) {
        //在页面最近一次更新完成之后执行$nextTick传递的回调函数
        //updated 这个钩子也是页面数据更新完成执行，但是不是一次，只要页面数据有更新它就会执行
        this.$nextTick(() => {
          new Swiper(this.$refs.bannerSwiper, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

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
};
</script>

<style lang="less" scoped>
</style>
