<template>
  <div class="page-title">feed.</div>
  <div class="posts-wrapper">
    <div class="post" v-for="post in posts">
      <div class="title">
        {{ post.title }}
      </div>
      <div class="owner">created by: {{ post.createdBy }}</div>
    </div>
  </div>
</template>

<script>
import { authHeader } from '../helpers/authHeader'
export default {
  data() {
    return {
      posts: [],
    }
  },

  created() {
    this.getPosts()
  },

  methods: {
    async getPosts() {
      await this.$axios
        .get('/api/posts', { headers: authHeader() })
        .then((response) => {
          this.posts = response.data
        })
        .catch((error) => {
          console.log('fetch posts', error)
        })
    },
  },
}
</script>

<style scoped>
.page-title {
  font-size: 3rem;
  margin-bottom: 18px;
}

.posts-wrapper {
  display: flex;
}

.post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  padding: 24px;
  border-radius: 10px;
  background-color: rgb(22, 22, 22);
  margin-right: 5px;
}
</style>
