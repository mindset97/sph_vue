<template>
    <div>
       <TypeNav></TypeNav>
       <ListContainer></ListContainer>
       <Recommend></Recommend>
       <Rank></Rank>
       <Like></Like>
       <Floor></Floor>
       <Floor></Floor>
       <Brand></Brand>
    </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Brand from './Brand'


    export default {
        name:'Home',
        //这里是局部注册
        components:{
          ListContainer,
          Recommend,
          Rank,
          Like,
          Brand
        }
        
        
    }
</script>

<style lang="less" scoped>

</style>