export const formatPhone = (value = '') => {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  let result = '+7';

  if (digits.length > 1) {
    const rest = digits.slice(1);

    if (rest.length > 0) result += ' (' + rest.slice(0, 3);
    if (rest.length >= 3) result += ') ' + rest.slice(3, 6);
    if (rest.length >= 6) result += '-' + rest.slice(6, 8);
    if (rest.length >= 8) result += '-' + rest.slice(8, 10);
  }

  return result;
};
