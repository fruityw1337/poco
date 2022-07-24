<template>
  <header>
    <!-- <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div> -->
    <div class="logo">Poco</div>
    <div class="d-flex">
      <div @click="logout()" class="logout">
        {{ user ? user.username : 'hz' }}
      </div>
      <div class="avatar"></div>
    </div>
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
}

.logout {
  cursor: pointer;
}
</style>
