import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../components/Logo';
import AddMovieButton from './components/AddMovieButton';
import SearchMovieInput from './components/SearchMovieInput';
import MovieDetails from './components/MovieDetails';
import { InitialMovie } from '../../../mocksData/initialMovie';
import './Header.css';

export default function Header(props) {
  const { activeFilm } = props;
  const [isDetailShown, setIsDetailShown] = useState(activeFilm.id);

  const handleIconClick = () => {
    props.handleClickMovie(InitialMovie);
  };

  useEffect(() => {
    setIsDetailShown(activeFilm.id);
  }, [activeFilm])

  return (
    <div className="header-wrap">
      <header className="header">
        { !isDetailShown ? (
            <>
              <div className="header-add-movie">
                <Logo/>
                <AddMovieButton/>
              </div>
              <SearchMovieInput/>
            </>
          ) : (
            <MovieDetails film={activeFilm} handleIconClick={handleIconClick} />
          )
        }
      </header>
    </div>
  )
}

Header.propTypes = {
  activeFilm: PropTypes.object.isRequired,
  handleClickMovie: PropTypes.func.isRequired
}
