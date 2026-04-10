<template>
  <div class="card border-0 shadow-sm">
    <div class="card-body">
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Fecha</label>
          <input class="form-control" type="date" :value="fecha" @input="$emit('update:fecha', $event.target.value)" />
        </div>
        <div class="col-md-6">
          <label class="form-label">Horario</label>
          <select class="form-select" :value="hora" @change="$emit('update:hora', $event.target.value)">
            <option value="">Selecciona una hora</option>
            <option v-for="slot in horarios" :key="slot" :value="slot">{{ slot }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  fecha: { type: String, default: '' },
  hora: { type: String, default: '' },
  horarios: {
    type: Array,
    default: () => ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
  }
})

defineEmits(['update:fecha', 'update:hora'])
</script>
