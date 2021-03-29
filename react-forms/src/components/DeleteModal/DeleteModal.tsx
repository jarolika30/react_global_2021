import React from 'react';
import PropTypes from 'prop-types';
import './DeleteModal.css';

export default function DeleteModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-confirmation" id="modal-confirm">
      <div className="modal-confirm">
        <div className="modal-header">
          <span className="modal-close-sign" onClick={props.onClose}>x</span>
        </div>
        <div className="modal-body">
          <h2>Delete movie</h2>
          <div className="modal-text">
            Are you sure you want to delete movie?
          </div>
        </div>
        <div className="modal-footer">
          <button className="confirm-btn" onClick={props.handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired
}