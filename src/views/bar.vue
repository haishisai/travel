<template>
    <div class="bar" >
        page bar
    </div>
</template>
<style lang="stylus" scoped>
    .bar
        width:100%
        height :.5rem
        border: 1px solid red
        box-sizing:border-box
        position : fixed
        bottom :0
</style>
<script>
export default {
    name: "bar"
}
</script>