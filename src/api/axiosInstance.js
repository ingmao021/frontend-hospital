import axios from 'axios'

const apiBaseUrl =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  (typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_API_BASE_URL : undefined)

if (!apiBaseUrl) {
  throw new Error('Configura VITE_API_URL o VITE_API_BASE_URL para conectarse al backend')
}

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000
})

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const mensaje =
      error.response?.data?.error ||
      error.response?.data?.message ||
      'Error de conexion con el servidor'
    return Promise.reject(new Error(mensaje))
  }
)

export default axiosInstance
