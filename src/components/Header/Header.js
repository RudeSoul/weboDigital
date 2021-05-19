import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';
import paths from 'paths';

import NavMenuItem from './component/NavMenuItem/NavMenuItem';

export default (props) => {
  return (
    <div className='Header'>
      <div className='flex Header__Nav'>
        
        <div className='logo'>
          <Link to={paths.home}>ABCD Logo</Link>
        </div>

        <div className='flex menu'>
          <NavMenuItem value='horticulture' icon='true'></NavMenuItem>
        </div>
        
        <div className='flex right-menu'>
          <div className='search'>search</div>
          <div className='phone'>phone number</div>
        </div>
      
      </div>
    </div>
  );
};
