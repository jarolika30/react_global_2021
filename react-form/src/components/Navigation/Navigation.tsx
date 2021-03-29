import React from 'react';
import { Links } from '../../../mocksData/linkItems';
import Link from '../Link';
import './Navigation.css';

export default function Navigation() {
  return (
    <ul>
      {
        Links.map(el => <Link key={el} title={el} />)
      }
    </ul>
  )
}
