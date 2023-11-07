

import React from 'react';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LockIcon from '@mui/icons-material/Lock';

const New = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Fetch the input values from the form
    const employeeId = document.getElementById('employeeId').value;
    const employeePassword = document.getElementById('employeePassword').value;

    // Send a POST request to the backend (replace 'your-backend-endpoint' with your actual backend API endpoint)
    fetch('your-backend-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employeeId, employeePassword }),
    })
      .then((response) => {
        // Handle the response from the backend if needed
        if (response.ok) {
          // Do something with a successful response
          console.log('Data sent to the backend successfully');
        } else {
          // Handle errors
          console.error('Error sending data to the backend');
        }
      })
      .catch((error) => {
        // Handle any network errors
        console.error('Network error:', error);
      });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="formNew">
          <form className="user-form" onSubmit={handleSubmit}>
            <img
              className="emimg bouncingImage"
              src="https://imgs.search.brave.com/V7VxlpGf0z39zXuyMB4OpOcX0zsSJMWpcuhFyJeX2CE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/NTg0MzM3MC92ZWN0/b3IvYnVzaW5lc3Mt/ZGVhbC1wYXJ0bmVy/c2hpcC1lbXBsb3lt/ZW50LW1hbmFnZW1l/bnQtbmV3LWNvbnRy/YWN0LWRlYWwtY29u/Y2VwdC12ZWN0b3It/ZmxhdC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9d3dub24x/WDlzNFJiTnFULTFP/Qzlhc3dQakR4bFc4/eU1pTnlIT0FKZTV1/az0"
              alt="addNewLogo"
            />
            <h1 className="heading">Add New User</h1>
            <div className="form-group">
              <div className="iconUser">
              <ManageAccountsIcon/>
              <label htmlFor="employeeId"></label>
              </div>
              <input
                type="text"
                id="employeeId"
                name="employeeId"
                placeholder="Enter Employee ID"
                required
              />
            </div>
            <div className="form-group">
              <div className="iconPw">
                <LockIcon/>
                <label htmlFor="employeeId"></label>
              </div>
              <input
                type="text"
                id="employeePassword"
                name="employeePassword"
                placeholder="Enter Employee Password"
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
