import React from 'react';
import { Provider } from 'react-redux';
import MovieContainer from './containers/MovieContainer';
import { configureStore } from './store/store';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <MovieContainer />
    </Provider>
  );
}

