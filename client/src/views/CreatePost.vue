<template>
  <div class="wrapper">
    <input placeholder="title" v-model="title" />
    <textarea rows="5" placeholder="description" v-model="description" />
    <button class="btn" @click="createPost()">create</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { authHeader } from '../helpers/authHeader'
export default {
  name: 'CreatePost',
  data() {
    return {
      title: '',
      description: '',
      image: '',
    }
  },

  computed: {
    ...mapState('user', { user: (state) => state.user }),
  },

  methods: {
    async createPost() {
      await this.$axios
        .post(
          '/api/posts/create',
          {
            title: this.title,
            description: this.description,
            image: this.image,
            createdBy: this.user.id,
          },
          { headers: authHeader() }
        )
        .then((response) => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.log('error', error)
        })
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
}

.btn {
  cursor: pointer;
  font-size: 29px;
  border-radius: 15px;
  padding: 0px 10px;
  margin: 0 0 5px 0;
  transition: 0.4s;
  border: none;
  background-color: #808080;
  color: rgb(48, 48, 48);
}

.btn:hover {
  background-color: #5c5c5c;
  transition: 0.4s;
}
</style>
