import React, { useState } from 'react';

// Link
import { Link } from 'react-router-dom';

// Images
import Logo from '../assets/logo/logo.png';

// Custom Components
import Input from '../components/Forms/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {};

  return (
    <div className='login'>
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
          placeholder='Enter Your Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder='Enter Your Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => handleLogin()}>Login</button>

        <div>
          <button onClick={() => alert('Under Construction')}>
            Login With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
