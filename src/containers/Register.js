import React, { useState } from 'react';

// Link
import { Link } from 'react-router-dom';

// Images
import Logo from '../assets/logo/logo.png';

// Custom Components
import Input from '../components/Forms/Input';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {};

  return (
    <div className='register'>
      <div>
        <div className='logo-con'>
          <img
            className='img-fluid'
            height={70}
            width={200}
            src={Logo}
            alt='Logo'
          />
        </div>
        <Input
          placeholder='Enter Your Name'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='Enter Your Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder='Enter Your Type'
          onChange={(e) => setType(e.target.value)}
        />
        <Input
          placeholder='Enter Your Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleRegister}>Register</button>
        <div>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
