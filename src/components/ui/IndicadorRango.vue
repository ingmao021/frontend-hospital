<template>
  <div class="d-flex align-items-center gap-2 p-2 rounded" :class="enRango ? 'bg-success-subtle' : 'bg-danger-subtle'">
    <i class="bi fs-5" :class="enRango ? 'bi-check-circle-fill text-success' : 'bi-exclamation-circle-fill text-danger'"></i>
    <span class="fw-bold fs-6">{{ valor }} {{ unidad }}</span>
    <span class="text-muted small">(Ref: {{ rangoMin }} - {{ rangoMax }} {{ unidad }})</span>
    <span class="badge ms-auto" :class="enRango ? 'bg-success' : 'bg-danger'">
      {{ enRango ? 'Normal' : 'Fuera de rango' }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  valor: { type: Number, required: true },
  rangoMin: { type: Number, required: true },
  rangoMax: { type: Number, required: true },
  unidad: { type: String, default: '' }
})

const enRango = computed(() => props.valor >= props.rangoMin && props.valor <= props.rangoMax)
</script>
