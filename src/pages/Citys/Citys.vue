<template>
    <div>
        <Header />
        <Search />
        <ToHome />
        <CitysList />
        <Alphabat />
    </div>
</template>
<script>
// @ is an alias to /src
import ToHome from '@/components/app/ToHome.vue'
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import CitysList from './components/CitysList.vue'
import Alphabat from './components/Alphabat.vue'
export default {
    name: 'list',
    components: {
        ToHome,
        Header,
        Search,
        CitysList,
        Alphabat
    }
}
</script>

