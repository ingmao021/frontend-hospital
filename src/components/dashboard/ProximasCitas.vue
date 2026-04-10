<template>
  <div class="card h-100 shadow-sm">
    <div class="card-header d-flex align-items-center">
      <i class="bi bi-calendar-check me-2 text-primary"></i>
      <strong>Proximas Citas</strong>
    </div>
    <div class="card-body">
      <LoadingSpinner v-if="loading" />
      <EmptyState v-else-if="!citas.length" mensaje="No tienes citas agendadas" icono="bi-calendar-x" />
      <ul v-else class="list-group list-group-flush">
        <li
          v-for="cita in citas"
          :key="cita.id ?? `${cita.fecha}-${cita.hora}`"
          class="list-group-item d-flex justify-content-between align-items-start"
        >
          <div>
            <div class="fw-semibold">{{ cita.medico ?? 'Medico asignado' }}</div>
            <small class="text-muted">{{ cita.especialidad }}</small>
          </div>
          <div class="text-end">
            <span class="badge bg-primary-subtle text-primary">{{ formatearFecha(cita.fecha) }}</span>
            <div><small class="text-muted">{{ cita.hora }}</small></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useHistoriaStore } from '../../stores/historiaStore'
import { formatearFecha } from '../../utils/formatters'
import LoadingSpinner from '../ui/LoadingSpinner.vue'
import EmptyState from '../ui/EmptyState.vue'

const historiaStore = useHistoriaStore()

const loading = computed(() => historiaStore.loading)
const citas = computed(() => historiaStore.historiaCompleta?.citasPasadas?.slice(0, 3) ?? [])
</script>
