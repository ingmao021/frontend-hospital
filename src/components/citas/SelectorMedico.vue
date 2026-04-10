<template>
  <div>
    <LoadingSpinner v-if="loading" />
    <EmptyState v-else-if="!medicos.length" mensaje="No hay medicos para esta especialidad" icono="bi-person-x" />
    <div v-else class="row g-3">
      <div v-for="medico in medicos" :key="medico.id" class="col-md-6">
        <div
          class="card h-100 border-2"
          :class="seleccionado?.id === medico.id ? 'border-primary bg-primary-subtle' : 'border-light'"
          style="cursor: pointer;"
          @click="$emit('seleccionar', medico)"
        >
          <div class="card-body">
            <div class="fw-semibold">{{ medico.nombre ?? 'Medico' }}</div>
            <div class="text-muted small">{{ medico.especialidad }}</div>
            <div class="small mt-2">Registro: {{ medico.registro ?? 'N/D' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from '../ui/LoadingSpinner.vue'
import EmptyState from '../ui/EmptyState.vue'

defineProps({
  medicos: { type: Array, default: () => [] },
  seleccionado: { type: Object, default: null },
  loading: { type: Boolean, default: false }
})

defineEmits(['seleccionar'])
</script>
