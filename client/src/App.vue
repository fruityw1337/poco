<template>
    <Header v-if="this.$route.fullPath != '/login'" />
    <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components: { Header },
    data() {
        return {}
    },
}
</script>

<style>
html {
    background-color: rgb(48, 48, 48);
    padding: 0;
    min-height: 100%;
    font-family: 'Poppins', sans-serif;
    color: white;
}

body {
    padding: 0;
    margin: 0;
}
</style>
