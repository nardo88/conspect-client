import axios from 'axios'

const api = axios.create({
    baseURL: 'https://conspect-api.vercel.app/api/v1',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  api.interceptors.request.use((config: any) => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('Meteor.loginToken')
    ) {
      config.headers['Authorization'] =
        'Bearer ' + localStorage.getItem('Meteor.loginToken')
    }
    return config
  })

  

  
  export default api
  
  