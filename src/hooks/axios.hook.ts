import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://conspect-api.vercel.app/api/v1',
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
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
