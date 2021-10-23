import React, { useState } from 'react';

// Images
import SearchIcon from '../../assets/other/searchIcon.png';

const Searchbar = () => {
  const [searchField, setSearchField] = useState('');

  // Input Handling
  const handleInputChange = (value) => {
    setSearchField(value);
    reset();
  };

  // Reset Inputs
  const reset = () => {
    setSearchField('');
  };

  return (
    <div className='search-bar'>
      <img src={SearchIcon} alt='Search Icon' />
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
