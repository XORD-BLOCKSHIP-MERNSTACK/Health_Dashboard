import React, { useState } from 'react';

// Images
import SearchIcon from '../../assets/other/searchIcon.png';

const Searchbar = (props) => {
  const { onChange } = props;
  // const [searchField, setSearchField] = useState('');

  // // Input Handling
  // const handleInputChange = (value) => {
  //   setSearchField(value);
  //   reset();
  // };

  // // Reset Inputs
  // const reset = () => {
  //   setSearchField('');
  // };

  return (
    <div className='search-bar'>
      <img src={SearchIcon} alt='Search Icon' />
      <input
        type='text'
        placeholder='Search'
        // onChange={(e) => handleInputChange(e.target.value)}
        onChange={onChange}
      />
    </div>
  );
};

export default Searchbar;
