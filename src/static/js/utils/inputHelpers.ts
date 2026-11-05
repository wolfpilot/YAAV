export const getKeyCode = (e: KeyboardEvent): number => {
  return e.which || e.keyCode
}
