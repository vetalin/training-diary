export const idGenerate = (): string => {
  return Date.now().toString() + Math.random().toString()
}
