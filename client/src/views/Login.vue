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
      <input
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 250px;
  background: none;
}

input {
  font-size: 50px;
  margin: 0 0 5px 0;
  padding: 5px 10px;
  border-radius: 15px;
  border: 2px solid grey;
  color: gray;
  background: none;
  text-align: center;
  transition: 0.4s;
}

input:hover {
  border: 2px solid #5c5c5c;
  transition: 0.4s;
}

input:focus {
  transition: 0.4s;
  border: 2px solid #5c5c5c;
  outline: none;
}

.btn {
  cursor: pointer;
  font-size: 50px;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 0 0 5px 0;
  transition: 0.4s;
  color: gray;
  border: none;
}

.login-btn {
  background-color: #808080;
  color: rgb(48, 48, 48);
}

.login-btn:hover {
  background-color: #5c5c5c;
  transition: 0.4s;
}

.registration-btn {
  background: none;
  font-size: 1.2rem;
}

.registration-btn:hover {
  color: rgb(192, 192, 192);
  transition: 0.4s;
}
</style>
