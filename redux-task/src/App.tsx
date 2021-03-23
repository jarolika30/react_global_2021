import React, { useState, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import Header from './containers/Header';
import Footer from './containers/Footer';
import MainContainer from './containers/MainContainer';
import { CardInfo } from '../mocksData/cardsInfo';
import MovieContainer from './containers/MovieContainer';
import { InitialMovie } from '../mocksData/initialMovie';
import { getAllMovies } from './actions';
import { configureStore } from './store/store';
import './App.css';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <MovieContainer />
    </Provider>
  );
}

