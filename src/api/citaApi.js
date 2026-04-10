import axiosInstance from './axiosInstance'

export const getMedicosPorEspecialidad = (especialidad) =>
  axiosInstance.get('/api/clinica/medicos', { params: { especialidad } })

export const agendarCita = (data) =>
  axiosInstance.post('/api/clinica/cita', data)

export const cancelarCita = (citaId) =>
  axiosInstance.delete(`/api/clinica/cita/${citaId}`)
