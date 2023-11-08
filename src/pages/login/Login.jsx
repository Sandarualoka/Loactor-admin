import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const navigate = useNavigate();
  const [isShaking, setShaking] = useState(false);

  const handleLogin = async () => {
    const email = document.querySelector('.login-input-em').value;
    const password = document.querySelector('.login-input-pw').value;

    if (email === 'sandarualoka@gmail.com' && password === '12345') {
      // Redirect upon successful login
      navigate('/new'); // Replace '/new' with your actual new route
    } else {
      console.error('Login failed');
      // Handle login failure here.
      setShaking(true); 
      setTimeout(() => {
        setShaking(false);
      }, 600);
    }
  };

  return (
    <div className="login-container">
      <div className="login-top"></div>
      <div className="login-bottom"></div>
      <div className="login-center">
        <img
          className='dentLogo'
          src='https://img.freepik.com/premium-vector/white-background-with-set-full-body-group-people-standing_18591-3796.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697673600&semt=ais'
          alt='dentLogo'
        />
        <h2 className='login-heading'>LOGIN</h2>
        <div className="login-usere">
          <PersonIcon className='input-icon' />
          <input type="email" placeholder="Enter your Email" className='login-input-em' />
        </div>
        <div className="login-userp">
          <KeyIcon className='input-icon' />
          <input type="password" placeholder="Enter Your Password" className='login-input-pw' />
        </div>
        <div className="login-submit-container">
          <div className={`login-submit ${isShaking ? 'shake' : ''}`} onClick={handleLogin}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
