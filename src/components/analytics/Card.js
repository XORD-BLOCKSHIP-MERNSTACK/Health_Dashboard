import React from 'react';

const Card = (props) => {
  // Destructuring Props
  const { title, stats, image } = props.data;

  return (
    <div id='card' className='col-lg-3 col-md-6 col-sm-6'>
      <div className='analytics-card'>
        <div className='card-image-con'>
          <img className='img-fluid' src={image} alt='Appoinment Icon' />
        </div>
        <div className='card-text-con'>
          <h6 className='card-title'>{title}</h6>
          <p className='card-stats'>{stats}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
