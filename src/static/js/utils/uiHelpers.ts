const DATA_LOCK_SELECTION_ATTR = "data-prevent-selection"

export const lockUserSelection = (elem: HTMLElement): void => {
  elem.setAttribute(DATA_LOCK_SELECTION_ATTR, "")
}

export const unlockUserSelection = (elem: HTMLElement): void => {
  elem.removeAttribute(DATA_LOCK_SELECTION_ATTR)
}

export function getCenter() {
  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  }
}
