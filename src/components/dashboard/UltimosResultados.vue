<template>
  <div class="card h-100 shadow-sm">
    <div class="card-header d-flex align-items-center">
      <i class="bi bi-clipboard2-pulse me-2 text-primary"></i>
      <strong>Ultimos Resultados</strong>
    </div>
    <div class="card-body">
      <LoadingSpinner v-if="loading" />
      <EmptyState v-else-if="!resultados.length" mensaje="Sin resultados recientes" icono="bi-clipboard2-x" />
      <div v-else class="vstack gap-3">
        <div v-for="item in resultados" :key="item.id ?? item.fecha" class="border rounded p-2">
          <div class="fw-semibold">{{ formatearFecha(item.fecha) }}</div>
          <small class="text-muted">{{ item.resumen ?? 'Resultados disponibles en historia clinica' }}</small>
        </div>
      </div>
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
const resultados = computed(() => historiaStore.historiaCompleta?.laboratorios?.slice(0, 3) ?? [])
</script>
