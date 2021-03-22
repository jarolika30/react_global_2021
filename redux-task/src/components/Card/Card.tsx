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

  const { id, title, year, description, ganre, img, rating, duration, activeFilm } = props;

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
    id,
    title,
    year,
    ganre,
    img,
    rating,
    duration,
    description
  }

  const makeActiveMovie = useCallback(() => {
    const editModal = showDeleteModal || showEditModal;
    const isModalOpen = showModal || editModal;

      if (!isModalOpen && movie.id !== activeFilm.id) {
        props.handleClickMovie(movie);
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
          <Modal 
            show={showModal} 
            onClose={onClose}
            handleAction={handleAction}
          />
      </div>
      <div className="card-info">
        <h3 className="title">{title}</h3>
        <span className="year">{year}</span>
        <span className="ganre">{ganre}</span>
      </div>
      <DeleteModal show={showDeleteModal} onClose={onCloseDeleteModal} handleConfirm={handleConfirm} />
      <EditModal show={showEditModal} onClose={onCloseEditModal} handleConfirm={handleEditConfirm} mode={true} movie={movie} />
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  ganre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClickMovie: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired
}

