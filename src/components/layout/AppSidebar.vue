<template>
  <aside class="border-end bg-light" style="width: 250px; min-height: calc(100vh - 56px);">
    <div class="p-3">
      <div class="text-muted small mb-2">Navegacion</div>
      <div class="list-group list-group-flush">
        <router-link class="list-group-item list-group-item-action" to="/dashboard" active-class="active">
          <i class="bi bi-speedometer2 me-2"></i>Dashboard
        </router-link>
        <router-link class="list-group-item list-group-item-action" to="/citas/nueva" active-class="active">
          <i class="bi bi-calendar-plus me-2"></i>Agendar cita
        </router-link>
        <router-link class="list-group-item list-group-item-action" to="/historia" active-class="active">
          <i class="bi bi-file-medical me-2"></i>Historia clinica
        </router-link>
      </div>
    </div>
  </aside>
</template>
