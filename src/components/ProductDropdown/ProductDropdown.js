import React from 'react';

import DropdownList from './Components/DropdownList';

import './ProductDropdown.scss';

export default function ProductDropdown() {
  const List1 = {
    header: 'Spraying Equipments',

    item: [
      'Fungicide/ Canopy Spraying',
      'Herbicide & Undervine Spraying',
      'Vineyard Spraying',
      'Fungicide/ Canopy Spraying',
      'Herbicide & Undervine Spraying',
      'Vineyard Spraying',
    ],
  };

  const List2 = {
    header: 'Canopy Management',

    item: [
      'Fungicide/ Canopy Spraying',
      'Herbicide & Undervine Spraying',
      'Vineyard Spraying',
      'Fungicide/ Canopy Spraying',
      'Herbicide & Undervine Spraying',
      'Vineyard Spraying',
    ],
  };

  const List3 = {
    header: 'Floor Management',

    item: [
      'Fungicide/ Canopy Spraying',
      'Herbicide & Undervine Spraying',
      'Vineyard Spraying',
      'Fungicide/ Canopy Spraying',
      'Herbicide & Undervine Spraying',
      'Vineyard Spraying',
    ],
  };

  const List4 = {
    header: 'Harvesting',

    item: [
      'Fungicide/ Canopy Spraying',
      'Herbicide & Undervine Spraying',
      'Vineyard Spraying',
      'Fungicide/ Canopy Spraying',
      'Herbicide & Undervine Spraying',
      'Vineyard Spraying',
    ],
  };
  return (
    <div>
      <div className='flex Dropdown__container'>
        <DropdownList className='list' {...List1}></DropdownList>
        <DropdownList className='list' {...List2}></DropdownList>
        <DropdownList className='list' {...List3}></DropdownList>
        <DropdownList className='list' {...List4}></DropdownList>
      </div>
    </div>
  );
}
