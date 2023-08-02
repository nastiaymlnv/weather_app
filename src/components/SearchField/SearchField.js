import React from "react";

import icon from '../../assets/img/magnifier.svg';

import './SearchField.css';

export const SearchField = () => {
    return (
        <div className='search-field-wrapper main-container-bg'>
            <img className='search-icon' src={icon}  />
            <input className='search-input' type='text' placeholder='Search the city' />
        </div>
    )
}

export default SearchField;