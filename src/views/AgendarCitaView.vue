<template>
  <div>
    <h4 class="mb-1"><i class="bi bi-calendar2-check me-2 text-primary"></i>Agendar cita</h4>
    <p class="text-muted mb-4">Sigue los 3 pasos para reservar tu proxima consulta.</p>

    <div class="progress mb-4" role="progressbar" aria-label="Progreso de agendamiento">
      <div class="progress-bar" :style="{ width: `${(pasoActual / 3) * 100}%` }">Paso {{ pasoActual }} de 3</div>
    </div>

    <div v-if="pasoActual === 1" class="card border-0 shadow-sm">
      <div class="card-body">
        <h6 class="mb-3">Paso 1: Selecciona especialidad</h6>
        <SelectorEspecialidad
          :seleccionada="especialidadSeleccionada"
          :especialidades="especialidades"
          @seleccionar="seleccionarEspecialidad"
        />
      </div>
    </div>

    <div v-if="pasoActual === 2" class="card border-0 shadow-sm">
      <div class="card-body">
        <h6 class="mb-3">Paso 2: Selecciona medico</h6>
        <SelectorMedico
          :medicos="citaStore.medicos"
          :loading="citaStore.loading"
          :seleccionado="medicoSeleccionado"
          @seleccionar="(medico) => (medicoSeleccionado = medico)"
        />
      </div>
    </div>

    <div v-if="pasoActual === 3" class="card border-0 shadow-sm">
      <div class="card-body">
        <h6 class="mb-3">Paso 3: Fecha y horario</h6>
        <SelectorHorario v-model:fecha="fechaSeleccionada" v-model:hora="horaSeleccionada" />
      </div>
    </div>

    <div class="d-flex gap-2 mt-4">
      <button class="btn btn-outline-secondary" :disabled="pasoActual === 1" @click="pasoActual--">Atras</button>
      <button v-if="pasoActual < 3" class="btn btn-primary ms-auto" :disabled="!puedeAvanzar" @click="pasoActual++">
        Siguiente
      </button>
      <button v-else class="btn btn-success ms-auto" :disabled="!puedeConfirmar || citaStore.loading" @click="confirmarCita">
        Confirmar cita
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useAuthStore } from '../stores/authStore'
import { useCitaStore } from '../stores/citaStore'
import { mostrarError } from '../utils/sweetalert'
import SelectorEspecialidad from '../components/citas/SelectorEspecialidad.vue'
import SelectorMedico from '../components/citas/SelectorMedico.vue'
import SelectorHorario from '../components/citas/SelectorHorario.vue'

const router = useRouter()
const authStore = useAuthStore()
const citaStore = useCitaStore()

const pasoActual = ref(1)
const especialidadSeleccionada = ref('')
const medicoSeleccionado = ref(null)
const fechaSeleccionada = ref('')
const horaSeleccionada = ref('')

const especialidades = ['Cardiologia', 'Pediatria', 'Neurologia', 'Medicina General']

const puedeAvanzar = computed(() => {
  if (pasoActual.value === 1) return Boolean(especialidadSeleccionada.value)
  if (pasoActual.value === 2) return Boolean(medicoSeleccionado.value)
  return false
})

const puedeConfirmar = computed(() => Boolean(fechaSeleccionada.value && horaSeleccionada.value && medicoSeleccionado.value))

async function seleccionarEspecialidad(especialidad) {
  especialidadSeleccionada.value = especialidad
  medicoSeleccionado.value = null
  try {
    await citaStore.cargarMedicosPorEspecialidad(especialidad)
  } catch (e) {
    mostrarError('No fue posible cargar medicos', e.message)
  }
}

async function confirmarCita() {
  try {
    const response = await citaStore.agendar({
      pacienteId: authStore.pacienteId,
      medicoId: medicoSeleccionado.value.id,
      especialidad: especialidadSeleccionada.value,
      fecha: fechaSeleccionada.value,
      hora: horaSeleccionada.value
    })

    await Swal.fire({
      icon: 'success',
      title: 'Cita agendada',
      text: response?.message ?? 'Tu cita fue registrada correctamente',
      confirmButtonColor: '#0d6efd'
    })

    router.push('/dashboard')
  } catch (e) {
    mostrarError('No fue posible agendar', e.message)
  }
}
</script>
