<template>
    <div>
         <!-- Search <br><br>
    params参数: {{$route.params.keyword}} ------ query参数：{{$route.query.keyword1}}
    <br>
     -->

          <TypeNav></TypeNav>

    </div>
</template>      

<script>
    export default {
        name:'Search',
        props:['keyword','keyword1']
        
    }
</script>

<style lang="less" scoped>

</style>