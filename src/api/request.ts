import { useContext, createContext } from 'react'
import Axios, { AxiosInstance } from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL as string + '',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axios.interceptors.request.use((config) => {
  const token: string = localStorage.getItem('token') as string

  if (token && config.headers !== undefined) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

axios.interceptors.response.use(
  (response) => {
    // const data = response.data
    if (response.status === 200) {
      return response
    }

    if (response.status === 401) {
      window.location.href = '/login'
    }

    return Promise.reject(new Error(response.statusText || 'Error'))
  },
  async (error) => {
    if (error.response?.status) {
      switch (error.response.status) {
        // 401: redirecto to login
        case 401:
          window.location.href = '/login'
          break

          // 403 invalid token
        case 403:
          window.location.href = '/login'
          break
        default:
          console.error({
            message: 'Error',
            description: error.response.data?.msg || 'Error'
          })
      }
    }

    return await Promise.reject(error)
  }
)

export const AxiosContext = createContext<AxiosInstance>(
  new Proxy(axios, {
    apply: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    },
    get: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    }
  })
)

export const useAxios = (): AxiosInstance => {
  return useContext(AxiosContext)
}

export default axios
