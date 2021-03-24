import React from 'react';
import SearchIcon from '@epam/assets/icons/common/action-search-24.svg';
import PropTypes from 'prop-types';
import { Logo } from '../../../../components/Logo';
import './MovieDetails.css';

export default function MovieDetails(props) {
  const { film } = props;
  return (
    <div className="movie-details">
      <div className="header-details">
        <Logo />
        <div className="search-icon" onClick={props.handleIconClick}>
          <SearchIcon />
        </div>
      </div>
      <div className="body-details">
        <div className="film-img">
          <img src={film.poster_path} alt={film.title} />
        </div>
        <div className="film-info">
          <div className="film-info-title">
            <span>{film.title}</span>
            <div className="film-rating">{film.vote_average}</div>
          </div>
          <div>
            <span className="film-year">{new Date(film.release_date).getFullYear()}</span>
            <span className="film-duration">{`${film.runtime} min`}</span>
          </div>
          <div className="film-description">
            <p>{film.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  film: PropTypes.object.isRequired,
  handleIconClick: PropTypes.func.isRequired
};
