<template>
  <div class="posts-wrapper">
    <div class="post" v-for="post in posts">
      <router-link :to="`/movie/${post._id}`">
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
          <div class="info">
            <div class="post-owner">🎬 {{ post.views }}</div>
            <div class="post-owner">
              {{ new Date(post.createdDate).toLocaleDateString('en-US') }}
            </div>
          </div>
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
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.posts-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 5px 10px;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  text-align: center;
}

.post {
  margin: 5px;
  transition: 0.3s;
}

.post:hover {
  transition: 0.3s;
  border-radius: 15px;
  /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.61); */
  box-shadow: rgba(94, 94, 167, 0.25) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.534) 0px 30px 60px -30px;
}

.post-image {
  font-size: 3rem;
  width: 200px;
  height: 270px;
  background-color: rgb(22, 22, 22);
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
}

.post-decription {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 60px;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  background-color: rgb(22, 22, 22);
}

.post-owner {
  font-size: 0.8rem;
}
</style>
