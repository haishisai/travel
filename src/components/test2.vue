<template>
    <div class="">
        <div v-bind:class="{ box : aaa23 }" >test2</div>
        <a href="/" >home</a>
    </div>
</template>
<script>
    export default {   
        props: {
            aaa : String
        },
        data() {
            return {
                aaa23 : true
            }
        },
        mounted(){
            
        }
    }
</script>
<style>
    .box {
        width: 200px;
        height: 200px;
        background-color: #f00;
    }
   .box2 {
        width: 200px;
        height: 200px;
        background-color: #456;
    }
    .big{
        width:300px;
    }
</style>