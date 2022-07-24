import axios from 'axios'
import router from '../../router'

const actions = {
  async login({ commit }, { username, password }) {
    await axios
      .post('/api/auth/login', {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data))
        commit('setUser', response.data)
        router.push('/')
      })
      .catch((error) => {
        console.log('err', error.message)
      })
  },

  async register({ commit, dispatch }, { username, password }) {
    await axios
      .post('/api/auth/register', {
        username,
        password,
      })
      .then((response) => {
        dispatch('login', { username, password })
      })
      .catch((error) => {
        console.log('err', error.message)
      })
  },

  logout({ commit }) {
    localStorage.removeItem('user')
    commit('setUser', null)
    router.push('/login')
  },
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

const lastActivity = JSON.parse(localStorage.getItem('user'))
const state = {
  user: lastActivity ? lastActivity : null,
}

const getters = {}

export const user = {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
