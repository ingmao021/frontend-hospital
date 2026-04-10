<template>
  <div class="row g-3">
    <div v-for="esp in especialidades" :key="esp" class="col-md-6">
      <div
        class="card h-100 border-2"
        :class="seleccionada === esp ? 'border-primary bg-primary-subtle' : 'border-light'"
        style="cursor: pointer;"
        @click="$emit('seleccionar', esp)"
      >
        <div class="card-body text-center">
          <i class="bi fs-2 mb-2" :class="iconoPorEspecialidad(esp)"></i>
          <p class="mb-0 fw-semibold">{{ esp }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  seleccionada: { type: String, default: '' },
  especialidades: { type: Array, default: () => ['Cardiologia', 'Pediatria', 'Neurologia', 'Medicina General'] }
})

defineEmits(['seleccionar'])

function iconoPorEspecialidad(esp) {
  const iconos = {
    Cardiologia: 'bi-heart-pulse',
    Pediatria: 'bi-balloon-heart',
    Neurologia: 'bi-activity',
    'Medicina General': 'bi-person-vcard'
  }
  return iconos[esp] ?? 'bi-hospital'
}
</script>
