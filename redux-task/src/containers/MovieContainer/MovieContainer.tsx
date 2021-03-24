import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import MainContainer from '../MainContainer';
import { CardInfo } from '../../../mocksData/cardsInfo';
import { InitialMovie } from '../../../mocksData/initialMovie';
import { getAllMovies } from '../../actions';
import { getAllMoviesSelector } from '../../selectors/get-all-movie.selector';

import './MovieContainer.css';

export default function MovieContainer() {
  const dispatch = useDispatch();
  const [activeMovie, setActiveMovie] = useState(InitialMovie);
  const allMovies = useSelector(getAllMoviesSelector);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
      <div className="app">
        <Header activeFilm={activeMovie} handleClickMovie={setActiveMovie} />
        <div className="content">
          <MainContainer films={allMovies} handleClickMovie={setActiveMovie} activeFilm={activeMovie} />
        </div>
        <Footer/>
      </div>
  );
}
