import React from 'react';

// Images
import Logo from '../../assets/logo/logo.png';
import Avatar from '../../assets/other/avatar.png';
import NotificationIcon from '../../assets/crud/editIcon.png';

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
          <img
            className='img-fluid'
            src={NotificationIcon}
            alt='Notification Icon'
          />
        </div>
        <img className='img-fluid' src={Avatar} alt='User Avatar' />
      </div>
    </div>
  );
};

export default Header;
