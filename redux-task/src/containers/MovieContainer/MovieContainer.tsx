import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import MainContainer from '../MainContainer';
import { CardInfo } from '../../../mocksData/cardsInfo';
import { InitialMovie } from '../../../mocksData/initialMovie';
import { getAllMovies } from '../../actions';

import './MovieContainer.css';

export default function MovieContainer() {
  const dispatch = useDispatch();
  const [activeMovie, setActiveMovie] = useState(InitialMovie);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

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
