import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import createRootReducer from './root-reducer';

export const configureStore = () => {
  const store = createStore(createRootReducer(), undefined, composeWithDevTools(applyMiddleware(thunk)));

  return store;
}
