<template>
    <div>
        <Header />
        <Search />
        <ToHome />
        <CitysList />
        <Alphabet />
    </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios'
import ToHome from '@/components/app/ToHome.vue'
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import CitysList from './components/CitysList.vue'
import Alphabet from './components/Alphabet.vue'
export default {
    name: 'list',
    components: {
        ToHome,
        Header,
        Search,
        CitysList,
        Alphabet
    },
    methods: {
      GetCitysInfo () {
        // axios.get('')
      } 
    }
}
</script>

