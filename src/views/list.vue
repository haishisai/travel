<template>
    <div class="list">
        <div>这里是 list.vue</div>
        <goHome msg="111" />
    </div>
</template>
<script>
// @ is an alias to /src
import goHome from '@/components/goHome.vue'
export default {
    name: 'list',
    components: {
        goHome
    }
}
</script>

