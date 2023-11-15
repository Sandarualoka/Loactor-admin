
// // export default New;

// import React from 'react';
// import './new.scss';
// import Sidebar from '../../components/sidebar/Sidebar';

// const New = () => {
//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     // Retrieve the token from local storage
//     const token = localStorage.getItem('accessToken');
  
//     // If token is not available, handle it appropriately (redirect to login, show an error, etc.)
//     if (!token) {
//       console.error('Token not available');
//       return;
//     }
  
//     const employeeId = document.getElementById('employeeId').value;
//     const employeePassword = document.getElementById('employeePassword').value;
  
//     // Create an object with the data
//     const data = { employeeid: employeeId, password: employeePassword };
//     console.log("DATA:",data)
  
//     try {
//       const response = await fetch('https://1ed8-124-43-9-155.ngrok-free.app/api/users/register', {
//         method: 'POST',
//         headers: {
//           'auth-token': `${token}`, // Include the token in the Authorization header
//           'Content-Type': 'application/json', // Set content type to JSON
//         },
//         body: JSON.stringify([data]),
//       });
//       console.log("Response:", response);
//       // Check if the request was successful (status code 2xx)
//       if (response.ok) {
//         console.log('User added successfully');
//         // Handle success, e.g., redirect or show a success message
//       } else {
//         console.error('Error adding user:', response.statusText);
//         // Handle error, e.g., show an error message
//       }
//     } catch (error) {
//       console.error('Error adding user:', error.message);
//       // Handle error, e.g., show an error message
//     }
//   };
  

//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
        
//         <div className="formNew">
//           <form className="user-form" onSubmit={handleSubmit}>
//           <img
//               className="newEmployeeGrp"
//               src="https://imgs.search.brave.com/V7VxlpGf0z39zXuyMB4OpOcX0zsSJMWpcuhFyJeX2CE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/NTg0MzM3MC92ZWN0/b3IvYnVzaW5lc3Mt/ZGVhbC1wYXJ0bmVy/c2hpcC1lbXBsb3lt/ZW50LW1hbmFnZW1l/bnQtbmV3LWNvbnRy/YWN0LWRlYWwtY29u/Y2VwdC12ZWN0b3It/ZmxhdC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9d3dub24x/WDlzNFJiTnFULTFP/Qzlhc3dQakR4bFc4/eU1pTnlIT0FKZTV1/az0"
//               alt="addNewLogo"
//             />
//             <h1 className="heading">Add New User</h1>
//             <div className="form-group">
//               <div className="iconUser">
//                 <label htmlFor="employeeId">Employee ID</label>
//               </div>
//               <input
//                 type="text"
//                 id="employeeId"
//                 name="employeeId"
//                 placeholder="Enter Employee ID"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <div className="iconPw">
//                 <label htmlFor="employeePassword">Employee Password</label>
//               </div>
//               <input
//                 type="password"
//                 id="employeePassword"
//                 name="employeePassword"
//                 placeholder="Enter Employee Password"
//                 required
//               />
//             </div>

           

//             <div class="wrap">
//                 <button class="button">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default New;

import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
const New = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Retrieve the token from local storage
    const token = localStorage.getItem("accessToken");
    // If token is not available, handle it appropriately (redirect to login, show an error, etc.)
    if (!token) {
      console.error("Token not available");
      return;
    }
    const employeeId = document.getElementById("employeeId").value;
    const employeePassword = document.getElementById("employeePassword").value;
    // Create an object with the data
    const data = { employeeid: employeeId, password: employeePassword };
    console.log("DATA:", data);
    try {
      const response = await fetch(
        "https://backattendance.tfdatamaster.com/api/users/register",
        {
          method: "POST",
          headers: {
            "auth-token": `${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json", // Set content type to JSON
          },
          body: JSON.stringify([data]),
        }
      );
      console.log("Response:", response);
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log("User added successfully");
        // Handle success, e.g., redirect or show a success message
      } else {
        console.error("Error adding user:", response.statusText);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error("Error adding user:", error.message);
      // Handle error, e.g., show an error message
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="formNew">
          <form className="user-form" onSubmit={handleSubmit}>
            <img
              className="newEmployeeGrp"
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