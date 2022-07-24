import { createStore } from 'vuex'
import { user } from './modules/user.module'

const store = createStore({
  modules: {
    user,
  },
})

export default store
