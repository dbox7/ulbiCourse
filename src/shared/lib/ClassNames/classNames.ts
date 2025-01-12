type modsType = Record<string, boolean | string>

export const classNames = (className: string, mods: modsType, additional: string[]) => {
  return [
    className,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, status]) => !!status)
      .map(([className]) => className)
  ].join(' ')
}