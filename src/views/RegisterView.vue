<template>
  <div class="min-vh-100 bg-light py-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-7">
          <div class="card shadow-sm border-0">
            <div class="card-body p-4 p-md-5">
              <h4 class="mb-3">
                <i class="bi bi-person-plus me-2 text-primary"></i>Registro de paciente
              </h4>
              <p class="text-muted mb-4">Completa tus datos para crear tu cuenta en el portal.</p>

              <form @submit.prevent="handleRegister">
                <div class="row g-3">
                  <div class="col-12">
                    <label class="form-label">Nombre completo</label>
                    <input v-model="form.nombre" type="text" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Numero de documento</label>
                    <input v-model="form.documento" type="text" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Telefono</label>
                    <input v-model="form.telefono" type="text" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Email</label>
                    <input v-model="form.email" type="email" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Fecha de nacimiento</label>
                    <input v-model="form.fechaNacimiento" type="date" class="form-control" required />
                  </div>

                  <div class="col-12">
                    <label class="form-label">Alergias (opcional)</label>
                    <input
                      v-model="form.alergias"
                      type="text"
                      class="form-control"
                      placeholder="Ej: Penicilina, Lactosa"
                    />
                    <div class="form-text">Escribe las alergias separadas por comas.</div>
                  </div>
                </div>

                <div class="d-flex gap-2 mt-4">
                  <router-link class="btn btn-outline-secondary" to="/login">Volver al login</router-link>
                  <button type="submit" class="btn btn-primary ms-auto" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                    Crear cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import { mostrarError, mostrarExito } from '../utils/sweetalert'

const authStore = useAuthStore()
const router = useRouter()
const loading = ref(false)

const form = reactive({
  nombre: '',
  documento: '',
  email: '',
  telefono: '',
  fechaNacimiento: '',
  alergias: ''
})

async function handleRegister() {
  loading.value = true
  try {
    const payload = {
      ...form,
      alergias: form.alergias
        ? form.alergias
            .split(',')
            .map((a) => a.trim())
            .filter(Boolean)
        : []
    }

    await authStore.registrar(payload)
    await mostrarExito('Registro exitoso', 'Tu cuenta fue creada correctamente')
    router.push('/dashboard')
  } catch (e) {
    mostrarError('No fue posible registrar', e.message)
  } finally {
    loading.value = false
  }
}
</script>
