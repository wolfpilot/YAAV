// Setup
const initialState = {
  isPlaying: true,
  hasUserInteracted: false,
};

export class Store {
  constructor() {
    if (Store.instance) {
      throw new Error('Store is a singleton');
    }

    Store.instance = this;
  }

  state = {
    ...initialState
  };
}

export function createStore() {
  return new Store();
}

export function getStore() {
  return Store.instance;
}
