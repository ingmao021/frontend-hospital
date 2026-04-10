import axiosInstance from './axiosInstance'

export const registrar = (data) =>
  axiosInstance.post('/api/clinica/paciente', data)

export const buscarPorDocumento = (documento) =>
  axiosInstance.get(`/api/clinica/paciente/documento/${documento}`)

export const buscarPorId = (pacienteId) =>
  axiosInstance.get(`/api/clinica/paciente/${pacienteId}`)
