export const formatPrice = (price) =>
  typeof price === 'number' ? price.toLocaleString('ru-RU') : '—';