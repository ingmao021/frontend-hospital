import axiosInstance from './axiosInstance'

export const getHistoriaCompleta = (pacienteId) =>
  axiosInstance.get(`/api/clinica/historia/${pacienteId}`)
