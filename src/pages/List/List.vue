<template>
    <div class="list">
        <div>这里是 list.vue</div>
        <ToHome msg="111" />
    </div>
</template>
<script>
// @ is an alias to /src
import ToHome from '@/components/app/ToHome.vue'
export default {
    name: 'list',
    components: {
        ToHome
    }
}
</script>

