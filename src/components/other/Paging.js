import React from 'react';

// Icons
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Paging = () => {
  return (
    <div className='paging'>
      <div className='arrow'>
        <AiOutlineLeft color='#52575C' size={13} />
      </div>
      {}
      <div className='number'>
        <p>1</p>
      </div>
      <div className='number'>
        <p>2</p>
      </div>
      <div className='number'>
        <p>3</p>
      </div>
      <div className='arrow'>
        <AiOutlineRight color='#52575C' size={13} />
      </div>
    </div>
  );
};

export default Paging;
