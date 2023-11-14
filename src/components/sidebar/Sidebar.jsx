// // import React from 'react';
// // import "./sidebar.scss";
// // import LogoutIcon from '@mui/icons-material/Logout';
// // import { Link } from 'react-router-dom';
// // import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
// // import PersonIcon from '@mui/icons-material/Person';
// // import GroupAddIcon from '@mui/icons-material/GroupAdd';
// // import FilterAltIcon from '@mui/icons-material/FilterAlt';

// // const Sidebar = () => {
// //   const handleLogout = () => {
// //     // Clear sessions, local storage, or perform any other necessary tasks
// //     localStorage.clear(); // Clear local storage
// //   };

// //   return (
// //     <div className='sidebar'>
// //       <div className="top">
// //         <Link to="/new" style={{textDecoration: "none"}}>
// //           <span className='logo'>LOCATOR ADMIN</span>
// //         </Link>
// //       </div>
// //       <hr />
// //       <div className="center">
// //         <ul>
// //           <p className='title'>OPTIONS</p>
// //           <Link to="/new" style={{textDecoration: "none"}}>
// //             <li>
// //               <PersonIcon className="icon" />
// //               <span >Add New Employee</span>
// //             </li>
// //           </Link>

// //           <Link to="/bulk" style={{textDecoration: "none"}}>
// //             <li>
// //               <GroupAddIcon className="icon" />
// //               <span >Add Bulk Employees</span>
// //             </li>
// //           </Link>

// //           <Link to="/view" style={{textDecoration: "none"}}>
// //             <li>
// //               <FormatListNumberedIcon className="icon" />
// //               <span >View Employees</span>
// //             </li>
// //           </Link>

// //           <Link to="/viewDetails" style={{textDecoration: "none"}}>
// //             <li>
// //               <FilterAltIcon className="icon" />
// //               <span >View Employee Details</span>
// //             </li>
// //           </Link>

          
// //           <li>
// //             <Link to="/" onClick={handleLogout} style={{textDecoration: "none"}}>
// //               <LogoutIcon className="icon" />
// //               <span>Logout</span>
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>
      
// //     </div>
// //   );
// // };

// // export default Sidebar;


// import React from 'react';
// import "./sidebar.scss";
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Link } from 'react-router-dom';
// import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
// import PersonIcon from '@mui/icons-material/Person';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';

// const Sidebar = () => {
//   const handleLogout = () => {
//     // Clear sessions, local storage, or perform any other necessary tasks
//     localStorage.clear(); // Clear local storage
//   };

//   return (
//     <div className='sidebar' style={{ backgroundColor: '  #0041fe ' }}> {/* Add a light background color */}
//       <div className="top">
//         <Link to="/new" style={{textDecoration: "none"}}>
//           <span className='logo'>LOCATOR ADMIN</span>
//         </Link>
//       </div>
//       <hr />
//       <div className="center">
//         <ul>
//           <p className='title'>OPTIONS</p>
//           <Link to="/new" style={{textDecoration: "none"}}>
//             <li>
//               <PersonIcon className="icon" />
//               <span >Add New Employee</span>
//             </li>
//           </Link>

//           <Link to="/bulk" style={{textDecoration: "none"}}>
//             <li>
//               <GroupAddIcon className="icon" />
//               <span >Add Bulk Employees</span>
//             </li>
//           </Link>

//           <Link to="/view" style={{textDecoration: "none"}}>
//             <li>
//               <FormatListNumberedIcon className="icon" />
//               <span >View Employees</span>
//             </li>
//           </Link>

//           <Link to="/viewDetails" style={{textDecoration: "none"}}>
//             <li>
//               <FilterAltIcon className="icon" />
//               <span >View Employee Details</span>
//             </li>
//           </Link>

          
//           <li>
//             <Link to="/" onClick={handleLogout} style={{textDecoration: "none"}}>
//               <LogoutIcon className="icon" />
//               <span>Logout</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import "./sidebar.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Sidebar = () => {
  const handleLogout = () => {
    // Clear sessions, local storage, or perform any other necessary tasks
    localStorage.clear(); // Clear local storage
  };

  return (
    <div className='sidebar' style={{ backgroundColor: '  #0041fe ' }}> {/* Add a light background color */}
      <div className="top">
        <Link to="/new" style={{textDecoration: "none"}}>
          <span className='logo' style={{ color: 'white' }}>LOCATOR ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className='title' style={{ color: 'white' }}>OPTIONS</p>
          <Link to="/new" style={{textDecoration: "none"}}>
            <li style={{ color: 'white' }}>
              <PersonIcon className="icon" style={{ color: 'white' }}/>
              <span style={{ color: 'white' }}>Add New Employee</span>
            </li>
          </Link>

          <Link to="/bulk" style={{textDecoration: "none"}}>
            <li style={{ color: 'white' }}>
              <GroupAddIcon className="icon" style={{ color: 'white' }} />
              <span style={{ color: 'white' }}>Add Bulk Employees</span>
            </li>
          </Link>

          <Link to="/view" style={{textDecoration: "none"}}>
            <li style={{ color: 'white' }}>
              <FormatListNumberedIcon className="icon" style={{ color: 'white' }}/>
              <span style={{ color: 'white' }}>View Employees</span>
            </li>
          </Link>

          <Link to="/viewDetails" style={{textDecoration: "none"}}>
            <li >
              <FilterAltIcon className="icon" style={{ color: 'white' }} />
              <span style={{ color: 'white' }}>View Employee Details</span>
            </li>
          </Link>

          
          <li>
            <Link to="/" onClick={handleLogout} style={{textDecoration: "none", color: 'white' }}>
              <LogoutIcon className="icon" style={{ color: 'white' }} />
              <span style={{ color: 'white' }}>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
