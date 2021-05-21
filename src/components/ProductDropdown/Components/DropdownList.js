import React from 'react';

import './DropdownList.scss';

export default function DropdownList({ header, item }) {
  
  return (
    <>
      <div className='flex-column dropdown'>
        <div className='header'>{header}</div>
        <div className='divider'></div>
        <div className='flex-column list'>
          {item.map((value, index) => {
            return (
              <>
                <div className='list__item'>{value}</div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
