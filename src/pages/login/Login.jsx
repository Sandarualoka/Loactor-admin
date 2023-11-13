


import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import './login.css';
import axios from 'axios'; // Import Axios library
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isShaking, setShaking] = useState(false);
  
  const handleLogin = async () => {
    const email = document.querySelector('.login-input-em').value;
    const password = document.querySelector('.login-input-pw').value;

    try {
      // Make a request to your backend to get the token
      const response = await axios.post('https://1ed8-124-43-9-155.ngrok-free.app/api/users/login', {
        employeeid: email,
        password: password,
      });

      // Assuming your backend returns a token in the response
      const token = response.data.token;
      const userid = response.data.employeeid;
      // Store the token in local storage or wherever you prefer
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userId', userid);
      // Redirect upon successful login
      navigate('/new'); // Replace '/new' with your actual new route
    } catch (error) {
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
      {/* ... other JSX elements ... */}
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
          {/* <div className="error-message" style={{ color: 'red',  backgroundColor: 'lightyellow', display: error ? 'block' : 'none' }}>
            You entered incorrect credentials.
          </div> */}
        </div>
      </div>
      
    </div>
  );
};

export default Login;

