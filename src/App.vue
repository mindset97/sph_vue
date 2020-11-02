<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
  export default {
    name:'',
    components:{
    Header,
    Footer
    },
    // home页和search页都有typeNav，每次打开都会发请求
     mounted(){
            this.getCategoryList()
        },

      methods:{
          getCategoryList(){
              this.$store.dispatch('getCategoryList')
          }
   
  }
  }
</script>

<style lang="less" scoped>

</style>