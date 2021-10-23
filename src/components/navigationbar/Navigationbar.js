import React, { useState } from 'react';

// Links Data
import { NavLinks } from '../../constants/staticData';

// Custom components
import List from '../other/List';
import Navlink from './Navlink';

const Navigationbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={toggle ? 'nav-bar-responsive' : 'nav-bar'}>
      <div className='links'>
        {NavLinks ? <List list={NavLinks} Component={Navlink} /> : <></>}
      </div>
      <div className='collapse-icon' onClick={() => setToggle(!toggle)}>
        <h3>icon</h3>
      </div>
    </div>
  );
};

export default Navigationbar;
