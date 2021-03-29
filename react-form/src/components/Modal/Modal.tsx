import React from 'react';
import PropTypes from 'prop-types';
import { MovieActions } from '../../../mocksData/movie-actions';
import './Modal.css';

export default function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" id="modal">
      <div className="modal-header">
        <span className="modal-close-sign" onClick={props.onClose}>x</span>
      </div>
      <div className="actions">
        {
          MovieActions.map(el => <div key={el} className="action-item" onClick={props.handleAction(el)}>{el}</div>)
        }
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired
}