import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

export default function Link(props) {
  const { title, active, handleClick } = props;

  return (
    <li className="list-item" onClick={() => handleClick(title)}>
      <a className={active ? 'list-item-active' : ''} href="#all">{title}</a>
    </li>
  )
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

