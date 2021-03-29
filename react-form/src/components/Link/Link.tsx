import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

export default function Link(props) {
  return (
    <li className="list-item">
      <a href="#all">{props.title}</a>
    </li>
  )
}

Link.propTypes = {
  title: PropTypes.string.isRequired
}

