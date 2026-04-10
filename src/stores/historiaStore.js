import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as historiaApi from '../api/historiaApi'

export const useHistoriaStore = defineStore('historia', () => {
  const historiaCompleta = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function cargarHistoria(pacienteId) {
    if (!pacienteId) {
      historiaCompleta.value = null
      return
    }

    loading.value = true
    error.value = null
    try {
      const response = await historiaApi.getHistoriaCompleta(pacienteId)
      historiaCompleta.value = response ?? null
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }

  function limpiar() {
    historiaCompleta.value = null
  }

  return { historiaCompleta, loading, error, cargarHistoria, limpiar }
})
