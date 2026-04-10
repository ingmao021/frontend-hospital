<template>
  <div class="alert alert-danger" role="alert">
    <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ mensaje }}
  </div>
</template>

<script setup>
defineProps({ mensaje: { type: String, required: true } })
</script>
