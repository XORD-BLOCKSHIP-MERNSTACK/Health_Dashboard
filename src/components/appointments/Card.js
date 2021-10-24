import React, { useState } from 'react';

// Images
import EditIcon from '../../assets/crud/editIcon.png';
import DeleteIcon from '../../assets/crud/deleteIcon.png';
import UserImg from '../../assets/other/user.png';

export const Card = (props) => {
  const { userimg, name, email, date, visitTime, doctor, condition } =
    props.data;

  return (
    <div className='data-card'>
      <div className='row'>
        <div className='col-sm-3'>
          <img className='img-fluid' src={userimg} alt='User Avatar' />
          <h6 className='label'>{name}</h6>
        </div>
        <div className='col-sm-8'>
          <h6 className='label1'>{email}</h6>
          <h6 className='label'>{date}</h6>
          <h6 className='label3'>{visitTime}</h6>
          <h6 className='label'>{doctor}</h6>
          <h6 className='label5'>{doctor}</h6>
        </div>
        <div className='col-sm-1'>
          <img className='img-fluid' src={EditIcon} alt='Edit Icon' />
          <img className='img-fluid' src={DeleteIcon} alt='Delete Icon' />
        </div>
      </div>
    </div>
  );
};

export const Cardlabels = () => {
  return (
    <div className='label-card'>
      <div className='row'>
        <div className='col-sm-3'>
          <h6 className='label'>Name</h6>
        </div>
        <div className='col-sm-8'>
          <h6 className='label1'>Email</h6>
          <h6 className='label'>Date</h6>
          <h6 className='label3'>Visit Time</h6>
          <h6 className='label'>Doctors</h6>
          <h6 className='label5'>Conditions</h6>
        </div>
        <div className='col-sm-1'>
          <img className='img-fluid' src={EditIcon} alt='Edit Icon' />
          <img className='img-fluid' src={DeleteIcon} alt='Delete Icon' />
        </div>
      </div>
    </div>
  );
};
