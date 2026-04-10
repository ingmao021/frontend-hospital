import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import * as pacienteApi from '../api/pacienteApi'

export const useAuthStore = defineStore('auth', () => {
  const paciente = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const estaLogueado = computed(() => paciente.value !== null)
  const nombrePaciente = computed(() => paciente.value?.nombre ?? '')
  const pacienteId = computed(() => paciente.value?.id ?? null)

  async function login(documento) {
    loading.value = true
    error.value = null
    try {
      const response = await pacienteApi.buscarPorDocumento(documento)
      paciente.value = response
      return response
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }

  async function registrar(datosPaciente) {
    loading.value = true
    error.value = null
    try {
      const response = await pacienteApi.registrar(datosPaciente)
      paciente.value = response
      return response
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }

  function logout() {
    paciente.value = null
  }

  return {
    paciente,
    loading,
    error,
    estaLogueado,
    nombrePaciente,
    pacienteId,
    login,
    registrar,
    logout
  }
})
