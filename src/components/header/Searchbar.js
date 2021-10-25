import React from 'react';

// Images
import SearchIcon from '../../assets/other/searchIcon.png';

const Searchbar = (props) => {
  // Destructuring Props
  const { onChange } = props;

  return (
    <div className='search-bar'>
      <img src={SearchIcon} alt='Search Icon' />
      <input type='text' placeholder='Search' onChange={onChange} />
    </div>
  );
};

export default Searchbar;
