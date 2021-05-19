import React from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import mdArrowDropdown from '@iconify-icons/ion/md-arrow-dropdown';

import './NavMenuItem.scss';

export default function NavMenuItem(props) {
  const { value, icon } = props;

  return (
    <div className='flex nav-item'>
      <div className='value'>{value}</div>
      {icon === 'true' && (
        <>
          <div className='icon'>
            <Icon
              icon={mdArrowDropdown}
              color='#6FBE44'
              width='14'
              height='11'
            />
          </div>
        </>
      )}
    </div>
  );
}
