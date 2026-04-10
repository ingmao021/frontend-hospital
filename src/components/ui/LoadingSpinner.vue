<template>
  <div class="d-flex justify-content-center align-items-center py-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>
    <span class="ms-3 text-muted">{{ mensaje }}</span>
  </div>
</template>

<script setup>
defineProps({ mensaje: { type: String, default: 'Cargando...' } })
</script>
