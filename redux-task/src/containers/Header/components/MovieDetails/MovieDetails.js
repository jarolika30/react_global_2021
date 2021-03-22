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
          <img src={film.img} alt={film.title} />
        </div>
        <div className="film-info">
          <div className="film-info-title">
            <span>{film.title}</span>
            <div className="film-rating">{film.rating}</div>
          </div>
          <div>
            <span className="film-year">{film.year}</span>
            <span className="film-duration">{`${film.duration} min`}</span>
          </div>
          <div className="film-description">
            <p>{film.description}</p>
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
