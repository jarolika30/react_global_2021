import { createStore } from 'redux';
import createRootReducer from './root-reducer';

export const configureStore = () => {
  const store = createStore(createRootReducer());

  return store;
}