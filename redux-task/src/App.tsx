import React, { useState } from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import MainContainer from './containers/MainContainer';
import { CardInfo } from '../mocksData/cardsInfo';
import { InitialMovie } from '../mocksData/initialMovie';
import './App.css';

export default function App() {
  const [activeMovie, setActiveMovie] = useState(InitialMovie);

  return (
    <div className="app">
      <Header activeFilm={activeMovie} handleClickMovie={setActiveMovie} />
      <div className="content">
        <MainContainer films={CardInfo} handleClickMovie={setActiveMovie} activeFilm={activeMovie} />
      </div>
      <Footer/>
    </div>
  );
}

