import React from 'react';

// Images
import Logo from '../../assets/logo/logo.png';
import Avatar from '../../assets/other/avatar.png';

// Icons
import { IoIosNotifications } from 'react-icons/io';

// Custom Components
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img className='img-fluid' src={Logo} alt='Logo' />
        <Searchbar />
      </div>
      <div className='header-right'>
        <div className='notification-icon'>
          <IoIosNotifications size={30} color=' #CACCCF' />
        </div>
        <img className='img-fluid' src={Avatar} alt='User Avatar' />
      </div>
    </div>
  );
};

export default Header;
