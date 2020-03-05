<template>
    <div class="bar" >       
        <span><router-link :to="{name:'home'}" >home</router-link></span>
        <span><router-link :to="{name:'list'}" >list</router-link></span>       
        <span><router-link :to="{name:'test'}" >test</router-link></span>       
    </div>
</template>

<script>
export default {
    name: "bar"
}
</script>
<style lang="stylus" scoped>
    .bar
        width:100%
        height :.5rem
        line-height : .5rem
        border: 1px solid red
        box-sizing:border-box
        position : fixed
        bottom :0
        display : flex
        justify-content : space-evenly
        span 
          flex: 1
          text-align: center
</style>