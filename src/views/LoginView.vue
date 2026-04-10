<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div class="card shadow-sm" style="width: 400px;">
      <div class="card-body p-4">
        <h4 class="card-title text-center mb-4">
          <i class="bi bi-hospital me-2 text-primary"></i>Clinica Portal
        </h4>
        <h6 class="text-center text-muted mb-4">Iniciar sesion</h6>

        <div class="mb-3">
          <label class="form-label">Numero de documento</label>
          <input
            v-model="documento"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errorMsg }"
            placeholder="Ej: 1234567890"
            @keyup.enter="handleLogin"
          />
          <div class="invalid-feedback">{{ errorMsg }}</div>
        </div>

        <button class="btn btn-primary w-100" :disabled="loading || !documento" @click="handleLogin">
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          Ingresar
        </button>

        <p class="text-center mt-3 mb-0">
          No tienes cuenta?
          <router-link to="/register">Registrate aqui</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import { mostrarError } from '../utils/sweetalert'

const authStore = useAuthStore()
const router = useRouter()
const documento = ref('')
const loading = ref(false)
const errorMsg = ref('')

async function handleLogin() {
  if (!documento.value.trim()) {
    errorMsg.value = 'Ingresa tu numero de documento'
    return
  }

  loading.value = true
  errorMsg.value = ''

  try {
    await authStore.login(documento.value.trim())
    router.push('/dashboard')
  } catch (e) {
    mostrarError('Paciente no encontrado', e.message)
  } finally {
    loading.value = false
  }
}
</script>
