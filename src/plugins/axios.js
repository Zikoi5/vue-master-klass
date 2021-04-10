import axios from "axios"

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || "https://reqres.in",
  timeout: 60000
})

instance.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default instance
