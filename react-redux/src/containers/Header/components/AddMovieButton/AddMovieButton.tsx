import React, { useState } from 'react';
import CreateModal from '../../../../components/CreateModal';
import { useDispatch } from 'react-redux';
import { createMovie } from '../../../../actions';
import './AddMovieButton.css';

export default function AddMovieButton() {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);

  const onCloseEditModal = (event) => {
    event.preventDefault();
    setShowAddModal(false);
  } 

  const handleOpenModal = (event) => {
    event.preventDefault();
    setShowAddModal(true);
  }

  const handleConfirm = (event) => {
    event.preventDefault();
    const movie = {
      "title": "My best friend",
      "tagline": "Here's to the fools who dream.",
      "vote_average": 7.9,
      "vote_count": 6782,
      "release_date": "2016-12-29",
      "poster_path": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      "budget": 30000000,
      "revenue": 445435700,
      "runtime": 128,
      "genres": [
        "Comedy",
        "Drama",
        "Romance"
      ]
    }
    dispatch(createMovie(movie));
    setShowAddModal(false);
  }

  return (
    <>
      <button className="add-button" onClick={handleOpenModal}>
        + Add movie
      </button>
      <CreateModal show={showAddModal} onClose={onCloseEditModal} handleConfirm={handleConfirm} />
    </>
  )
}
