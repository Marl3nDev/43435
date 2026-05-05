export function  formateHours(seconds) {
  const date = new Date(seconds * 1000)

  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`}

export function formateHoursInText(seconds) {
  const date = new Date(seconds * 1000);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const plural = (num, one, few, many) => {
    if (num % 10 === 1 && num % 100 !== 11) return one;
    if ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num % 100)) return few;
    return many;
  };

  return [`${hours} ${plural(hours, 'час', 'часа', 'часов')}`,
          `${minutes} ${plural(minutes, 'минута', 'минуты', 'минут')}`];

}