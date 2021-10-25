import React from 'react';

const Input = (props) => {
  // Destructuring props
  const { placeholder, onChange } = props;
  return (
    <div className='input-con'>
      <input placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default Input;
