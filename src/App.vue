<template>
  <template v-if="authStore.paciente">
    <AppNavbar />
    <div class="d-flex">
      <AppSidebar />
      <main class="flex-grow-1 p-4">
        <router-view />
      </main>
    </div>
  </template>

  <template v-else>
    <router-view />
  </template>
</template>

<script setup>
import { useAuthStore } from './stores/authStore'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppSidebar from './components/layout/AppSidebar.vue'

const authStore = useAuthStore()
</script>
