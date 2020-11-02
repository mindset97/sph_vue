<template>
    <div>
       <TypeNav></TypeNav>
       <ListContainer></ListContainer>
       <Recommend></Recommend>
       <Rank></Rank>
       <Like></Like>
       <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor>
       <Brand></Brand>
    </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Brand from './Brand'
import { mapState } from 'vuex'


    export default {
        name:'Home',
        //这里是局部注册
        components:{
          ListContainer,
          Recommend,
          Rank,
          Like,
          Brand,
        },

mounted(){
    this.getFloorList()
},
methods:{
    getFloorList(){
        this.$store.dispatch('getFloorList')
    }
},

computed:{
    ...mapState({
        floorList:state=>state.home.floorList
    })
}
        
    }
</script>

<style lang="less" scoped>

</style>