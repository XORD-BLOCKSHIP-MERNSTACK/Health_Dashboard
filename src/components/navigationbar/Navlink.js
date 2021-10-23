import React, { useState, Fragment, useEffect } from 'react';

// Link
import { Link } from 'react-router-dom';

const Navlink = (props) => {
  // Destructuring props
  const { path, name, dropdown } = props.data;

  // State
  const [active, setActive] = useState(false);

  return (
    <Fragment>
      {dropdown ? (
        <>Dropdown Part</>
      ) : (
        <Link to={path} className='nav-link' onClick={setActive}>
          <h6 className={active ? 'active' : 'inactive'}>{name}</h6>
        </Link>
      )}
    </Fragment>
  );
};

export default Navlink;
