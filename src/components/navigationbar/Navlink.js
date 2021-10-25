import React, { Fragment } from 'react';

// Link
import { Link } from 'react-router-dom';

const Navlink = (props) => {
  // Destructuring props
  const { path, name, dropdown, active } = props.data;

  return (
    <Fragment>
      {dropdown ? (
        <>Dropdown Part</>
      ) : (
        <Link to={path} className='nav-link'>
          <h6 className={active ? 'active' : 'inactive'}>{name}</h6>
        </Link>
      )}
    </Fragment>
  );
};

export default Navlink;
