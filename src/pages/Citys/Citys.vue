<template>
    <div>
        <Header />
        <Search />
        <GoHome />
        <CitysList />

    </div>
</template>
<script>
// @ is an alias to /src
import GoHome from '@/components/app/GoHome.vue'
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import CitysList from './components/CitysList.vue'
export default {
    name: 'list',
    components: {
        GoHome,
        Header,
        Search,
        CitysList
    }
}
</script>

