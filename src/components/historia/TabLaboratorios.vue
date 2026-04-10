<template>
  <EmptyState v-if="!laboratorios?.length" mensaje="Sin examenes registrados" icono="bi-eyedropper" />
  <div v-else class="accordion" id="accordionLab">
    <div v-for="(lab, index) in laboratorios" :key="lab.id ?? index" class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          :class="{ collapsed: index !== 0 }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#lab-${index}`"
          :aria-controls="`lab-${index}`"
        >
          <i class="bi bi-flask me-2 text-primary"></i>
          Examenes del {{ formatearFecha(lab.fecha) }}
        </button>
      </h2>
      <div :id="`lab-${index}`" class="accordion-collapse collapse" :class="{ show: index === 0 }" data-bs-parent="#accordionLab">
        <div class="accordion-body">
          <div v-for="examen in lab.examenes ?? []" :key="examen.nombre" class="mb-3">
            <p class="fw-semibold mb-1">{{ examen.nombre }}</p>
            <IndicadorRango
              :valor="Number(examen.valor)"
              :rango-min="Number(examen.rangoMin)"
              :rango-max="Number(examen.rangoMax)"
              :unidad="examen.unidad"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IndicadorRango from '../ui/IndicadorRango.vue'
import EmptyState from '../ui/EmptyState.vue'
import { formatearFecha } from '../../utils/formatters'

defineProps({ laboratorios: { type: Array, default: () => [] } })
</script>
