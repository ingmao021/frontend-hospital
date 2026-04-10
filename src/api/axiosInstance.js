import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
