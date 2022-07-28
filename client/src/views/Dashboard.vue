<template>
  <div class="posts-wrapper">
    <div class="post" v-for="post in posts">
      <router-link :to="'#'">
        <img
          v-if="post.image"
          class="post-image"
          :src="post.image"
          :alt="post.title"
        />
        <div v-if="!post.image" class="post-image">💔</div>
        <div class="post-decription">
          <div class="title">
            {{ post.title }}
          </div>
          <div class="owner">created by: {{ post.createdBy }}</div>
        </div>
      </router-link>
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

  async created() {
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
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.posts-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.post {
  margin: 5px;
}

.post-image {
  font-size: 3rem;
  width: 348px;
  height: 250px;
  background-color: rgb(22, 22, 22);
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-decription {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 120px;
  padding: 24px;
  border-radius: 0px 0px 10px 10px;
  background-color: rgb(22, 22, 22);
}
</style>
