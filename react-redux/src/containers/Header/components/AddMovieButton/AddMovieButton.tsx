import React, { useState } from 'react';
import CreateModal from '../../../../components/CreateModal';
import { useDispatch } from 'react-redux';
import { createMovie } from '../../../../actions';
import { Links } from '../../../../../mocksData/linkItems';
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

  const handleConfirm = (values) => {
    const movie = {
      title: values.title,
      tagline: values.tagline,
      vote_average: 0,
      vote_count: 0,
      release_date: values.release_date,
      poster_path: values.poster_path,
      overview: values.overview,
      budget: +values.budget,
      runtime: +values.runtime,
      genres: Links[values.genres] === 'All' ? Links : [Links[values.genres]]
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
