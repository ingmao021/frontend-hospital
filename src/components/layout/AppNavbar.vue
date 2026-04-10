<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <span class="navbar-brand">
        <i class="bi bi-hospital me-2"></i>Clinica Portal
      </span>
      <div class="ms-auto d-flex align-items-center gap-3">
        <span class="text-white">
          <i class="bi bi-person-circle me-1"></i>{{ authStore.nombrePaciente }}
        </span>
        <button class="btn btn-outline-light btn-sm" @click="handleLogout">
          <i class="bi bi-box-arrow-right me-1"></i>Salir
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>
