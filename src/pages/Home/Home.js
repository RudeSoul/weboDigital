import ProductDropdown from 'components/ProductDropdown/ProductDropdown';
import React from 'react';

import './Home.scss';

export default props => {
    return(
        <>
        <div className="HomePage">
            Home Page
        </div>
        <ProductDropdown></ProductDropdown>
    </>);
}