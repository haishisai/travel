<template>
    <div class="hospital-info">
        <div id="box" ref="box" v-bind:class="{ big : ifshow }" ></div>
    <goHome msg="111" />
    
    
    </div>
    
</template>
<script>
    // @ is an alias to /src
    import goHome from '@/components/goHome.vue'
    export default {  
        name: 'test',
        components: {
            goHome
        },  
        data () {
            return {
                ifshow : true
            }
        },
        mounted(){
            var box = this.$refs.box;
            box.addEventListener('mouseover',()=>{
                box.style.background = '#555'
                this.ifshow = false
                // console.log("test")
                
            }),
            box.addEventListener('mouseleave',()=>{
                box.style.background = 'red'
                this.ifshow = true
            })
        }
    }
</script>
<style>
    #box {
        width: 200px;
        height: 200px;
        background-color: #f00;
    }
    .big{
        width:300px !important;
    }
</style>