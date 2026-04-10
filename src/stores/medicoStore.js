import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as citaApi from '../api/citaApi'

export const useMedicoStore = defineStore('medico', () => {
  const medicos = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function cargarPorEspecialidad(especialidad) {
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

  return { medicos, loading, error, cargarPorEspecialidad }
})
