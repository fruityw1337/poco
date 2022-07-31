<template>
  <div class="wrapper">
    <label className="file_holder">
      <input
        hidden
        id="preview"
        type="file"
        accept="image/*"
        @change="onFileSelected"
      />
      <img v-if="imageUrl" :src="imageUrl" alt="preview" />
      <div v-else>{{ cover }}</div>
    </label>
    <div class="info">
      <input placeholder="title" v-model="title" />
      <textarea rows="5" placeholder="description" v-model="description" />
    </div>
  </div>
  <div class="wrapper">
    <button class="btn" @click="createPost()">create</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { authHeader } from '../helpers/authHeader'
import { config } from '../config/config'
export default {
  name: 'CreatePost',
  data() {
    return {
      title: '',
      description: '',
      imageUrl: null,
      imageFile: null,
      cover: 'Upload cover 📁',
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
            image: this.imageUrl,
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

    async onFileSelected(event) {
      this.imageUrl = null
      this.imageFile = event.target.files[0]

      let form = new FormData()
      form.append('image', this.imageFile)

      await this.$axios
        .post(config.imageHostingUrl, form, {
          onUploadProgress: (uploadEvent) => {
            this.cover =
              Math.round((uploadEvent.loaded / uploadEvent.total) * 100) + '%'
          },
        })
        .then((response) => {
          console.log('successful', response.data)
          this.imageUrl = response.data.data.display_url
        })
        .catch((error) => {
          console.log('unsuccessful')
        })
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  padding: 5px 10px;
}

.btn {
  width: 100%;
  cursor: pointer;
  font-size: 29px;
  border-radius: 15px;
  padding: 0px 10px;
  transition: 0.4s;
  border: none;
  background-color: #808080;
  color: rgb(48, 48, 48);
}

.btn:hover {
  background-color: #5c5c5c;
  transition: 0.4s;
}

textarea {
  font-size: 25px;
  margin: 0 0 5px 0;
  padding: 5px 10px;
  border-radius: 15px;
  border: 2px solid grey;
  color: gray;
  background: none;
  transition: 0.4s;
  resize: none;
  height: 100%;
}

textarea:hover {
  border: 2px solid #5c5c5c;
  transition: 0.4s;
}

textarea:focus {
  transition: 0.4s;
  border: 2px solid #5c5c5c;
  outline: none;
}

.file_holder {
  width: 282px;
  height: 383px;
  border: none;
  background-color: #3b3b3b;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.15s;
  margin-right: 10px;
}

.file_holder > img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
}

.file_holder:hover {
  border: none;
  background-color: rgb(92, 92, 92);
  transition: 0.15s;
}

.info {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
