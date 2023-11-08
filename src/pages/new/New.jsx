

import React from 'react';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';



const New = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const employeeId = document.getElementById('employeeId').value;
    const employeePassword = document.getElementById('employeePassword').value;

    // You can access the uploaded file using document.getElementById('fileInput').files[0]

    // Perform form submission logic including the file upload to the backend
    // Fetch the data to the backend
    // ...

    console.log("Employee ID:", employeeId);
    console.log("Employee Password:", employeePassword);
    console.log("Uploaded file:", document.getElementById('fileInput').files[0]);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        
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
                <label htmlFor="employeeId">Employee ID</label>
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
                <label htmlFor="employeePassword">Employee Password</label>
              </div>
              <input
                type="password"
                id="employeePassword"
                name="employeePassword"
                placeholder="Enter Employee Password"
                required
              />
            </div>
            <div className="form-group">
              <div className="fileInput">
                <input type="file" id="fileInput" accept=".csv" />
              </div>
            </div>
            {/* <button type="submit">Submit</button> */}

            <div class="wrap">
                <button class="button">Submit</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;

