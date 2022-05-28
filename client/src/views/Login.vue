<template>
    <div class="wrapper">
        <div class="login-form">
            <input
                v-model="username"
                type="text"
                name="username"
                id="username"
            />
            <input
                v-model="password"
                type="password"
                name="password"
                id="password"
            />
            <button class="btn login-btn" @click="getLogin">login</button>
            <button class="btn registration-btn" @click="getLogin">
                registration
            </button>
        </div>
        {{ this.res }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            res: '',
        }
    },

    methods: {
        async getLogin() {
            try {
                this.res = await this.$axios
                    .post('/api/auth/login', {
                        username: this.username,
                        password: this.password,
                    })
                    .then((response) => (this.res = response.data.token))
            } catch (e) {
                this.res = 'invalid data'
            }
        },
    },
}
</script>

<style scoped>
input {
    font-size: 24px;
    margin: 0 0 5px 0;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #edc9ff;
    color: white;
    background: none;
}

input:focus {
    outline: none;
}

.wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
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
    font-size: 24px;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 0 5px 0;
    transition: 0.25;
    border: 1px solid #edc9ff;
}

.login-btn {
    background-color: #edc9ff;
}

.login-btn:hover {
    background-color: #fed4e7;
    border: 1px solid #fed4e7;
    transition: 0.25;
}

.registration-btn {
    background: none;
    color: #edc9ff;
}

.registration-btn:hover {
    border: 1px solid #fed4e7;
    color: #fed4e7;
    transition: 0.25;
}
</style>
