import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AxiosPlugin from './plugins/axios.plugin'

const app = createApp(App)

app.use(router)
app.use(AxiosPlugin)

app.mount('#app')
