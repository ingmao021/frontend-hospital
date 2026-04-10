import axiosInstance from './axiosInstance'

export const solicitarExamenes = (data) =>
  axiosInstance.post('/api/clinica/laboratorio', data)
