export function cn(cls, additional=[], mods={}) {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter((arr) => arr[1])
      .map(([key]) => key),
  ].join(' ')
}