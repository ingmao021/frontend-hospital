<template>
  <EmptyState v-if="!prescripciones?.length" mensaje="Sin prescripciones registradas" icono="bi-capsule" />
  <div v-else class="row g-3">
    <div v-for="presc in prescripciones" :key="presc.id" class="col-md-6">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-header bg-primary-subtle">
          <i class="bi bi-prescription2 me-2"></i>
          <strong>Prescripcion</strong>
          <span class="float-end text-muted small">{{ formatearFecha(presc.fecha) }}</span>
        </div>
        <div class="card-body">
          <table class="table table-sm mb-0">
            <thead>
              <tr>
                <th>Medicamento</th>
                <th>Dosis</th>
                <th>Frecuencia</th>
                <th>Duracion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="med in presc.medicamentos ?? []" :key="med.nombre">
                <td>{{ med.nombre }}</td>
                <td>{{ med.dosis }}</td>
                <td>{{ med.frecuencia }}</td>
                <td>{{ med.duracion }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EmptyState from '../ui/EmptyState.vue'
import { formatearFecha } from '../../utils/formatters'

defineProps({ prescripciones: { type: Array, default: () => [] } })
</script>
