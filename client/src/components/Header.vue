<template>
  <header>
    <!-- <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div> -->
    <router-link to="/" class="logo">poco.</router-link>
    <div v-if="user" class="d-flex">
      <router-link
        v-if="$route.fullPath !== '/create'"
        to="/create"
        class="btn-create"
      >
        create new</router-link
      >
      <div @click="logout()" class="logout">
        {{ user ? user.username : 'fuck me' }}
      </div>
      <div class="avatar">🌵</div>
    </div>
    <div v-else><router-link to="/login"> login </router-link></div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('user', { user: (state) => state.user }),
  },

  methods: {
    ...mapActions('user', ['logout']),
  },
}
</script>

<style scoped>
header {
  background-color: rgb(22, 22, 22);
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
}

.logo {
  color: white;
  font-size: 40px;
}

.d-flex {
  display: flex;
  align-items: center;
}

.avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: rgb(74, 74, 74);
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
}

.logout {
  font-size: 1.5rem;
  cursor: pointer;
}

.btn-create {
  font-size: 1.5rem;
  color: white;
  background: none;
  border: 1px solid white;
  border-radius: 10px;
  margin-right: 20px;
  padding: 5px 20px;
  transition: 0.4s;
}

.btn-create:hover {
  color: rgb(22, 22, 22);
  transition: 0.4s;
  background: white;
  cursor: pointer;
}
</style>
