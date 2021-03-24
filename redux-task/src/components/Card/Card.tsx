import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import DeleteModal from '../DeleteModal';
import EditModal from '../EditModal';
import './Card.scss';

export default function Card(props) {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const { film, activeFilm } = props;

  const handleAction = (action) => (
    event
  ) => {
    event.preventDefault();

    if (action === 'Delete') {
      setShowModal(false);
      setShowDeleteModal(true);
    } else if (action === 'Edit') {
      setShowModal(false);
      setShowEditModal(true);
    }
  }

  const onClose = (event) => {
    event.preventDefault();
    setShowModal(false);
  }

  const onCloseDeleteModal = (event) => {
    event.preventDefault();
    setShowDeleteModal(false);
  }

  const onCloseEditModal = (event) => {
    event.preventDefault();
    setShowEditModal(false);
  }

  const handleOpenModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  }

  const handleConfirm = (event) => {
    event.preventDefault();
    setShowDeleteModal(false);
  }

  const handleEditConfirm = (event) => {
    event.preventDefault();
    setShowEditModal(false);
  }

  const movie = {
    id: film.id,
    title: film.title,
    year: new Date(film.release_date).getFullYear(),
    ganre: film.genres.join(', '),
    img: film.poster_path,
    rating: film.vote_average,
    duration: film.runtime,
    description: film.overview
  }

  const makeActiveMovie = useCallback(() => {
    const editModal = showDeleteModal || showEditModal;
    const isModalOpen = showModal || editModal;

      if (!isModalOpen && film.id !== activeFilm.id) {
        props.handleClickMovie(film);
      }
    }, [movie]);

  return (
    <div className="card-container">
      <div className={showModal ? "kebab-menu-hidden" : "kebab-menu"} onClick={handleOpenModal}>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="card-img" onClick={makeActiveMovie}>
          <img src={film.poster_path} alt={film.title} />
          <Modal 
            show={showModal} 
            onClose={onClose}
            handleAction={handleAction}
          />
      </div>
      <div className="card-info">
        <h3 className="title">{movie.title}</h3>
        <span className="year">{movie.year}</span>
        <span className="ganre">{movie.ganre}</span>
      </div>
      <DeleteModal show={showDeleteModal} onClose={onCloseDeleteModal} handleConfirm={handleConfirm} />
      <EditModal show={showEditModal} onClose={onCloseEditModal} handleConfirm={handleEditConfirm} mode={true} movie={film} />
    </div>
  )
}

Card.propTypes = {
  film: PropTypes.object.isRequired,
  handleClickMovie: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired
}

