const DATA_LOCK_SELECTION_ATTR = 'data-prevent-selection';

export const lockUserSelection = elem => {
  elem.setAttribute(DATA_LOCK_SELECTION_ATTR, '');
};

export const unlockUserSelection = elem => {
  elem.removeAttribute(DATA_LOCK_SELECTION_ATTR);
};
