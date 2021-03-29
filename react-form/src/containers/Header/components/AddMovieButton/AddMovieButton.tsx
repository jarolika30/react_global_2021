import React, { useState } from 'react';
import EditModal from '../../../../components/EditModal';
import { InitialMovie } from '../../../../../mocksData/initialMovie'
import './AddMovieButton.css';

export default function AddMovieButton() {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleEditConfirm = (event) => {
    event.preventDefault();
    setShowAddModal(false);
  }

  const onCloseEditModal = (event) => {
    event.preventDefault();
    setShowAddModal(false);
  } 

  const handleOpenModal = (event) => {
    event.preventDefault();
    setShowAddModal(true);
  }

  return (
    <>
      <button className="add-button" onClick={handleOpenModal}>
        + Add movie
      </button>
      <EditModal show={showAddModal} onClose={onCloseEditModal} handleConfirm={handleEditConfirm} mode={false} movie={InitialMovie} />
    </>
  )
}
