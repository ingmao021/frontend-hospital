<template>
  <div>
    <h4 class="mb-4">
      <i class="bi bi-file-medical me-2"></i>Historia clinica
    </h4>

    <LoadingSpinner v-if="historiaStore.loading" />

    <template v-else-if="historiaStore.historiaCompleta">
      <div class="alert alert-warning d-flex align-items-center mb-4" v-if="historiaStore.historiaCompleta.alergias?.length">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        <div>
          <strong>Alergias registradas:</strong>
          {{ historiaStore.historiaCompleta.alergias.join(', ') }}
        </div>
      </div>

      <ul class="nav nav-tabs mb-4">
        <li class="nav-item">
          <button class="nav-link" :class="{ active: tabActivo === 'consultas' }" @click="tabActivo = 'consultas'">
            <i class="bi bi-clipboard2-pulse me-1"></i>Consultas
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" :class="{ active: tabActivo === 'prescripciones' }" @click="tabActivo = 'prescripciones'">
            <i class="bi bi-capsule me-1"></i>Prescripciones
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" :class="{ active: tabActivo === 'laboratorios' }" @click="tabActivo = 'laboratorios'">
            <i class="bi bi-eyedropper me-1"></i>Laboratorios
          </button>
        </li>
      </ul>

      <TabConsultas v-if="tabActivo === 'consultas'" :consultas="historiaStore.historiaCompleta.consultas" />
      <TabPrescripciones
        v-if="tabActivo === 'prescripciones'"
        :prescripciones="historiaStore.historiaCompleta.prescripciones"
      />
      <TabLaboratorios v-if="tabActivo === 'laboratorios'" :laboratorios="historiaStore.historiaCompleta.laboratorios" />
    </template>

    <div v-else class="alert alert-info">No hay datos de historia clinica disponibles para este paciente.</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '../stores/authStore'
import { useHistoriaStore } from '../stores/historiaStore'
import LoadingSpinner from '../components/ui/LoadingSpinner.vue'
import TabConsultas from '../components/historia/TabConsultas.vue'
import TabPrescripciones from '../components/historia/TabPrescripciones.vue'
import TabLaboratorios from '../components/historia/TabLaboratorios.vue'

const authStore = useAuthStore()
const historiaStore = useHistoriaStore()
const tabActivo = ref('consultas')

onMounted(() => {
  historiaStore.cargarHistoria(authStore.pacienteId)
})
</script>
