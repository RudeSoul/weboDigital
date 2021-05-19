import React from 'react';

import './NavMenuItem.scss';

export default function NavMenuItem(props) {
  const { value, icon } = props;

  return (
    <div className='flex nav-item'>
      <div className='value'>{value}</div>
      {icon === 'true' && (
        <>
          <div className='icon'>icon</div>
        </>
      )}
    </div>
  );
}
