import React, { useState } from 'react';

import './Header.scss';

import Logo from './component/Logo/Logo';
import NavMenuItem from './component/NavMenuItem/NavMenuItem';

import SearchIcon from './assets/icons/searchIcon.svg';
import PhoneIcon from './assets/icons/phoneIcon.svg';
import ProductDropdown from 'components/ProductDropdown/ProductDropdown';

export default (props) => {
  const [showElement, setShowElement] = useState(false);

  return (
    <div className='Header'>
      <div className='flex Header__Nav'>
        <div className='logo'>
          <Logo></Logo>
        </div>

        <div className='flex menu'>
          <span
            onClick={() => {
              setShowElement(!showElement);
            }}
          >
            <NavMenuItem value='horticulture' icon='true'></NavMenuItem>
          </span>
          <NavMenuItem value='viticulture' icon='true'></NavMenuItem>
          <NavMenuItem value='parts' icon='false'></NavMenuItem>
          <NavMenuItem value='find a dealer' icon='false'></NavMenuItem>
          <NavMenuItem value='company' icon='false'></NavMenuItem>
          <NavMenuItem value='resources' icon='true'></NavMenuItem>
          <NavMenuItem value='contact' icon='false'></NavMenuItem>
        </div>

        <div className='search'>
          <img src={SearchIcon} alt='search Icon' />
        </div>
        <div className='flex phone'>
          <div className='phone__icon'>
            <img src={PhoneIcon} alt='phone number' />{' '}
          </div>
          <div className='phone__number'>1800 269 773</div>
        </div>
      </div>
      <div
        className='product-dropdown'
        style={{
          display: showElement ? 'block' : 'none',
        }}
      >
        <ProductDropdown></ProductDropdown>
      </div>
    </div>
  );
};
