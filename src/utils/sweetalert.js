import Swal from 'sweetalert2'

export function mostrarExito(titulo, texto = '') {
  return Swal.fire({
    icon: 'success',
    title: titulo,
    text: texto,
    confirmButtonColor: '#0d6efd',
    timer: 3000,
    timerProgressBar: true
  })
}

export function mostrarError(titulo, texto = '') {
  return Swal.fire({
    icon: 'error',
    title: titulo,
    text: texto,
    confirmButtonColor: '#dc3545'
  })
}

export function confirmar(titulo, texto = '') {
  return Swal.fire({
    icon: 'question',
    title: titulo,
    text: texto,
    showCancelButton: true,
    confirmButtonText: 'Si, confirmar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#0d6efd',
    cancelButtonColor: '#6c757d'
  })
}

export function mostrarAdvertencia(titulo, texto = '') {
  return Swal.fire({
    icon: 'warning',
    title: titulo,
    text: texto,
    confirmButtonColor: '#ffc107'
  })
}
