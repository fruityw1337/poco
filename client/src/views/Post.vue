<template>
  <div v-if="post" class="wrapper">
    <div class="title">
      {{ post.title }}
    </div>
    <div class="description">{{ post.description }}</div>
  </div>
  <div v-else>Movie not found.</div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      post: null,
    }
  },

  async created() {
    this.getPost()
  },

  computed: {
    postId() {
      return this.$route.params.id
    },
  },

  methods: {
    async getPost() {
      await this.$axios.get(`/api/posts/${this.postId}`).then((response) => {
        this.post = response.data
      })
    },
  },
}
</script>

<style scoped></style>
