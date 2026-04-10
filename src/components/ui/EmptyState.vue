<template>
  <div class="text-center py-5 text-muted">
    <i class="bi fs-1 d-block mb-2" :class="icono"></i>
    <p class="mb-0">{{ mensaje }}</p>
  </div>
</template>

<script setup>
defineProps({
  mensaje: { type: String, required: true },
  icono: { type: String, default: 'bi-inbox' }
})
</script>
