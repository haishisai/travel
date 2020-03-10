<template>
    <div class="list">
        <div>这里是 list.vue</div>
        <GoHome msg="111" />
    </div>
</template>
<script>
// @ is an alias to /src
import GoHome from '@/components/app/GoHome.vue'
export default {
    name: 'list',
    components: {
        GoHome
    }
}
</script>

