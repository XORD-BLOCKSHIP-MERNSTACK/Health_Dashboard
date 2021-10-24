import React from 'react';

export const SubHeading = (props) => {
  const { subHeading } = props;
  return <h5 className='subHeading'>{subHeading}</h5>;
};

export const MainHeading = (props) => {
  const { mainHeading } = props;
  return <h2 className='mainHeading'>{mainHeading}</h2>;
};
