<template>
    <div>
         <!-- Search <br><br>
    params参数: {{$route.params.keyword}} ------ query参数：{{$route.query.keyword1}}
    <br>
     -->
    <br>
    params参数: {{keyword}} ------ query参数：{{keyword1}}

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