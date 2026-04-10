import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as citaApi from '../api/citaApi'

export const useCitaStore = defineStore('cita', () => {
  const proximasCitas = ref([])
  const citasPasadas = ref([])
  const medicos = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function cargarMedicosPorEspecialidad(especialidad) {
    loading.value = true
    error.value = null
    try {
      const response = await citaApi.getMedicosPorEspecialidad(especialidad)
      medicos.value = Array.isArray(response) ? response : []
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }

  async function agendar(citaData) {
    loading.value = true
    error.value = null
    try {
      const response = await citaApi.agendarCita(citaData)
      return response
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }

  async function cancelar(citaId) {
    loading.value = true
    error.value = null
    try {
      await citaApi.cancelarCita(citaId)
      proximasCitas.value = proximasCitas.value.filter((c) => c.id !== citaId)
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }

  return {
    proximasCitas,
    citasPasadas,
    medicos,
    loading,
    error,
    cargarMedicosPorEspecialidad,
    agendar,
    cancelar
  }
})
