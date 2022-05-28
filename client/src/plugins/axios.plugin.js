import axios from 'axios'

export default {
    install: (app, options) => {
        const _axios = axios.create({})

        _axios.interceptors.request.use(
            (conf) => conf,
            (error) => Promise.reject(error)
        )

        _axios.interceptors.response.use(
            (response) => response,
            (error) => Promise.reject(error)
        )

        app.config.globalProperties.$axios = _axios
    },
}
