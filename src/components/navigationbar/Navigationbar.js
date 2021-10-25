import React, { useState } from 'react';

// Icons
import { AiOutlineMenuUnfold } from 'react-icons/ai';

// Links Data
import { NavLinks } from '../../constants/staticData';

// Custom components
import { List } from '../other/List';
import Navlink from './Navlink';
import Searchbar from '../header/Searchbar';

const Navigationbar = (props) => {
  const { onChange } = props;
  // State
  const [toggle, setToggle] = useState(false);

  return (
    <div className={toggle ? 'nav-bar-responsive' : 'nav-bar'}>
      <div className='links'>
        {NavLinks ? <List list={NavLinks} Component={Navlink} /> : <></>}
      </div>
      <div className='collapse-icon' onClick={() => setToggle(!toggle)}>
        <AiOutlineMenuUnfold size={30} color='#558EFF' />
        <Searchbar onChange={onChange} />
      </div>
    </div>
  );
};

export default Navigationbar;
