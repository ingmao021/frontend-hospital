export function formatearFecha(fecha) {
  if (!fecha) return '-'
  const valor = new Date(fecha)
  if (Number.isNaN(valor.getTime())) return fecha
  return valor.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })
}

export function formatearNombre(nombre = '') {
  return nombre
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1).toLowerCase())
    .join(' ')
}
