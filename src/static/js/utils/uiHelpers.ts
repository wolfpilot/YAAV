const DATA_LOCK_SELECTION_ATTR = "data-prevent-selection"

export const lockUserSelection = (elem: HTMLElement) => {
  elem.setAttribute(DATA_LOCK_SELECTION_ATTR, "")
}

export const unlockUserSelection = (elem: HTMLElement) => {
  elem.removeAttribute(DATA_LOCK_SELECTION_ATTR)
}

export const getCenter = () => ({
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
})
