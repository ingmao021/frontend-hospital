import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/citas/nueva',
    name: 'AgendarCita',
    component: () => import('../views/AgendarCitaView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/historia',
    name: 'HistoriaClinica',
    component: () => import('../views/HistoriaClinicaView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.estaLogueado) {
    return { name: 'Login' }
  }
  if (to.meta.requiresGuest && authStore.estaLogueado) {
    return { name: 'Dashboard' }
  }
  return true
})

export default router
