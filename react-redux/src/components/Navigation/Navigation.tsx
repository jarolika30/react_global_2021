import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Links } from '../../../mocksData/linkItems';
import { filterByGanreAction } from '../../actions';
import Link from '../Link';
import './Navigation.css';

export default function Navigation() {
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState<string>(Links[0]);

  const handleClick = (el) => {
    setActiveLink(el);

    dispatch(filterByGanreAction(el));
  } 

  return (
    <ul>
      {
        Links.map(el => <Link key={el} title={el} active={el === activeLink} handleClick={handleClick} />)
      }
    </ul>
  )
}
