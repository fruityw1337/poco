<template>
  <div class="wrapper">
    <div class="login-form">
      <input
        class="login-input"
        v-model="username"
        name="username"
        placeholder="username"
        autocomplete="off"
      />
      <input
        class="login-input"
        v-model="password"
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        class="login-input"
        v-if="!loginAction"
        v-model="confirmPassword"
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
      />
      <button class="btn login-btn" @click="authHandler()">
        {{ loginAction ? 'login' : 'sign in' }}
      </button>
      <button class="btn registration-btn" @click="loginAction = !loginAction">
        {{ loginAction ? "haven't an account?" : 'already have an account?' }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loginAction: true,
      username: '',
      password: '',
      confirmPassword: '',
    }
  },

  methods: {
    ...mapActions('user', ['login', 'register']),

    async authHandler() {
      if (this.loginAction) {
        if (this.username.length > 0 && this.password.length > 5) {
          await this.login({ username: this.username, password: this.password })
        } else {
          console.log('invalid creadentials')
        }
      } else {
        if (
          this.username.length > 0 &&
          this.password.length > 5 &&
          this.password === this.confirmPassword
        ) {
          await this.register({
            username: this.username,
            password: this.password,
          })
        } else {
          console.log('invalid creadentials')
        }
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 500px;
  background: none;
}

.login-input {
  font-size: 50px;
}

.btn {
  cursor: pointer;
  font-size: 48px;
  border-radius: 15px;
  padding: 0px 10px;
  margin: 0 0 5px 0;
  transition: 0.4s;
  color: gray;
  border: none;
}

.login-btn {
  text-align: center;
  background-color: #808080;
  color: rgb(48, 48, 48);
}

.login-btn:hover {
  background-color: #5c5c5c;
  transition: 0.4s;
}

.registration-btn {
  text-align: center;
  background: none;
  font-size: 1.2rem;
}

.registration-btn:hover {
  color: rgb(192, 192, 192);
  transition: 0.4s;
}
</style>
