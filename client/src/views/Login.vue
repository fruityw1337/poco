<template>
  <div class="wrapper">
    <div class="login-form">
      <input
        v-model="username"
        name="username"
        placeholder="username"
        autocomplete="off"
      />
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="password"
      />
      <button
        class="btn login-btn"
        @click="login({ username: this.username, password: this.password })"
      >
        login
      </button>
      <button
        class="btn registration-btn"
        @click="register({ username: this.username, password: this.password })"
      >
        registration
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      username: 'admin',
      password: 'admin1',
    }
  },

  methods: {
    ...mapActions('user', ['login', 'register']),
  },
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input {
  font-size: 50px;
  margin: 0 0 5px 0;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  color: gray;
  background: none;
}

input:focus {
  outline: none;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 250px;
  background: none;
}

.btn {
  cursor: pointer;
  font-size: 50px;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 0 0 5px 0;
  transition: 0.55s;
  color: gray;
  border: none;
}

.login-btn {
  background-color: transparent;
}

.login-btn:hover {
  color: rgb(192, 192, 192);
  transition: 0.55s;
}

.registration-btn {
  background: none;
  font-size: 1.2rem;
}

.registration-btn:hover {
  color: rgb(192, 192, 192);
  transition: 0.55s;
}
</style>
