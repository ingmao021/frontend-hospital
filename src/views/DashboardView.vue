<template>
  <div>
    <h4 class="mb-1">Bienvenido, {{ authStore.nombrePaciente }} 👋</h4>
    <p class="text-muted mb-4">Aqui tienes un resumen de tu estado de salud</p>

    <div class="row g-4">
      <div class="col-md-6">
        <ProximasCitas />
      </div>
      <div class="col-md-6">
        <UltimosResultados />
      </div>
    </div>

    <div class="row g-3 mt-2">
      <div class="col-auto">
        <router-link to="/citas/nueva" class="btn btn-primary">
          <i class="bi bi-calendar-plus me-2"></i>Agendar nueva cita
        </router-link>
      </div>
      <div class="col-auto">
        <router-link to="/historia" class="btn btn-outline-secondary">
          <i class="bi bi-file-medical me-2"></i>Ver historia clinica
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '../stores/authStore'
import { useHistoriaStore } from '../stores/historiaStore'
import ProximasCitas from '../components/dashboard/ProximasCitas.vue'
import UltimosResultados from '../components/dashboard/UltimosResultados.vue'

const authStore = useAuthStore()
const historiaStore = useHistoriaStore()

onMounted(() => {
  historiaStore.cargarHistoria(authStore.pacienteId)
})
</script>
