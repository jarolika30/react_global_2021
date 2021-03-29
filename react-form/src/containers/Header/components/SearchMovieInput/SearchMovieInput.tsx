import React from 'react';
import './SearchMovieInput.css';

export default function SearchMovieInput() {
  return (
    <div className="search-container">
      <div className="search-wrap">
        <h1>Find your movie</h1>
        <div>
          <input className="search-input" type="text" placeholder="What do you want to watch?"></input>
          <button className="search-button">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
