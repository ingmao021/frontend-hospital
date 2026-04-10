import axiosInstance from './axiosInstance'

export const generarPrescripcion = (data) =>
  axiosInstance.post('/api/clinica/prescripcion', data)
