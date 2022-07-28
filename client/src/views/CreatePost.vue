<template>
  <input placeholder="title" v-model="title" />
  <input placeholder="description" v-model="description" />
  <button @click="createPost()">create</button>
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

<style></style>
