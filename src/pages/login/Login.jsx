import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = async () => {
    const email = document.querySelector('.login-input-em').value;
    const password = document.querySelector('.login-input-pw').value;

    try {
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login successful!');
        // Handle success - you can redirect or perform actions upon successful login.
      } else {
        console.error('Login failed');
        // Handle login failure here.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle other errors (like network issues) here.
    }
  };

  return (
    <div className="login-container" onClick={onclick}>
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
          <PersonIcon />
          <input type="email" placeholder="Enter your Email" className='login-input-em' />
        </div>
        <div className="login-userp">
          <KeyIcon />
          <input type="password" placeholder="Enter Your Name" className='login-input-pw' />
        </div>

        
        <div className="login-submit-container">
          <div className="login-submit" onClick={handleLogin}>
            Login
          </div>
        </div>
        

        <h2>&nbsp;</h2>
      </div>
    </div>
  );
};

export default Login;
