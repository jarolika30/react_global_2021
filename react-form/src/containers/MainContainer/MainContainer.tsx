import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Filter from '../../components/Filter';
import CardsComponent from '../../components/CardsComponent/CardsComponent';
import ErrorBoundary from '../../components/ErrorBoundary';
import './MainContainer.css';

export default function MainContainer(props) {
  const { films, activeFilm } = props;

  return (
    <div className="main-wrap">
      <main className="main-container">
        <div className="nav-wrap">
          <Navigation/>
          <div className="filter-block">
            <span>Sort by</span> 
            <Filter/>
          </div>
        </div>
        <ErrorBoundary>
          <CardsComponent films={films} handleClickMovie={props.handleClickMovie} activeFilm={activeFilm} />
        </ErrorBoundary>
      </main>
    </div>
  )
}

MainContainer.propTypes = {
  films: PropTypes.array.isRequired,
  handleClickMovie: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired
}
