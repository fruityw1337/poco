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
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: rgb(48, 48, 48);
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgb(22, 22, 22);
}

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
  min-height: 100%;
}

button {
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
  color: white;
}

input,
textarea {
  font-size: 25px;
  margin: 0 0 5px 0;
  padding: 5px 10px;
  border-radius: 15px;
  border: 2px solid grey;
  color: gray;
  background: none;
  transition: 0.4s;
  resize: none;
}

input:hover,
textarea:hover {
  border: 2px solid #5c5c5c;
  transition: 0.4s;
}

input:focus,
textarea:focus {
  transition: 0.4s;
  border: 2px solid #5c5c5c;
  outline: none;
}
</style>
