import React from 'react';

import { Link } from 'react-router-dom';
import paths from 'paths';

import './logo.scss';

export default function Logo() {
  return (
    <div className='Logo'>
      <Link to={paths.home}>ABCD Logo</Link>
    </div>
  );
}
