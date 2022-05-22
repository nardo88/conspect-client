import axios from 'axios'

const api = axios.create({
  baseURL: 'https://conspect-api.vercel.app/api/v1',
  headers: {
    'Content-Type': 'application/json'
  },
})

api.interceptors.request.use((config: any) => {
  let token = localStorage.getItem('userData')
  if (token) {
    token = JSON.parse(token).token
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

export default api

