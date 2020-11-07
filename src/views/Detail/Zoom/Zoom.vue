<template>
  <div class="spec-preview">
  <img :src="defaultImg.imgUrl" />
    <div class="event"></div>
    <div class="big">
      <img src="../images/s1.png" />
    </div>
    <div class="mask"></div>
  </div>
</template>
  
<script>
  export default {
    name: "Zoom",
    props:['imgList'],
     mounted(){
      //全局事件总线处理接收小图列表组件传递的下标
      this.$bus.$on('changeDefaultIndex',this.changeDefaultIndex)
    },
     data(){
      return {
        defaultIndex:0 //这个数据是图片下标，控制显示的图片是哪张，
      }
    },
    methods:{
        changeDefaultIndex(index){
        this.defaultIndex = index
      },

      
    },
     computed:{
      //计算defaultImg为了去处理假报错
      defaultImg(){
        return this.imgList[this.defaultIndex] || {}
      }
    },
  }
   
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>