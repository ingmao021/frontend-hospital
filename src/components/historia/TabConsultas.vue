<template>
  <EmptyState v-if="!consultas?.length" mensaje="Sin consultas registradas" icono="bi-clipboard2-x" />
  <div v-else class="table-responsive">
    <table class="table table-hover align-middle">
      <thead class="table-light">
        <tr>
          <th><i class="bi bi-calendar3 me-1"></i>Fecha</th>
          <th><i class="bi bi-person-badge me-1"></i>Medico</th>
          <th><i class="bi bi-clipboard-pulse me-1"></i>Diagnostico</th>
          <th>Observaciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="consulta in consultas" :key="consulta.id ?? consulta.fecha">
          <td>{{ formatearFecha(consulta.fecha) }}</td>
          <td>{{ consulta.medico }}</td>
          <td>
            <span class="badge bg-info-subtle text-info">{{ consulta.diagnostico }}</span>
          </td>
          <td class="text-muted">{{ consulta.observaciones || '-' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import EmptyState from '../ui/EmptyState.vue'
import { formatearFecha } from '../../utils/formatters'

defineProps({ consultas: { type: Array, default: () => [] } })
</script>
