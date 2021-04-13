import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import DeleteModal from '../DeleteModal';
import EditModal from '../EditModal';
import { deleteMovie, updateMovie } from '../../actions';
import { Links } from '../../../mocksData/linkItems';
import './Card.scss';

export default function Card(props) {
  const dispatch = useDispatch();
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
    dispatch(deleteMovie(film.id));
    setShowDeleteModal(false);
  }

  const handleEditConfirm = (values) => {
    const movie = {
      id: values.id,
      title: values.title,
      tagline: values.tagline,
      vote_average: values.vote_average,
      vote_count: values.vote_count,
      release_date: values.release_date,
      poster_path: values.poster_path,
      overview: values.overview,
      budget: +values.budget,
      runtime: +values.runtime,
      genres: Links[values.genres] === 'All' ? Links : [Links[values.genres]],
      revenue: values.revenue
    }
    dispatch(updateMovie(movie));
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
      <EditModal show={showEditModal} onClose={onCloseEditModal} handleConfirm={handleEditConfirm} movie={film} />
    </div>
  )
}

Card.propTypes = {
  film: PropTypes.object.isRequired,
  handleClickMovie: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired
}

