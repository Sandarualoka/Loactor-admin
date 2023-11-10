import React from 'react';
import "./sidebar.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


const Sidebar = () => {
  const handleLogout = () => {
    // Clear sessions, local storage, or perform any other necessary tasks
    localStorage.clear(); // Clear local storage
  };

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/new" style={{textDecoration: "none"}}>
          <span className='logo'>LOCATOR ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className='title'>OPTIONS</p>
          <Link to="/new" style={{textDecoration: "none"}}>
            <li>
              <PersonIcon className="icon" />
              <span >Add New Employee</span>
            </li>
          </Link>

          <Link to="/new" style={{textDecoration: "none"}}>
            <li>
              <GroupAddIcon className="icon" />
              <span >Add Bulk Employees</span>
            </li>
          </Link>

          <Link to="/view" style={{textDecoration: "none"}}>
            <li>
              <FormatListNumberedIcon className="icon" />
              <span >View Employees</span>
            </li>
          </Link>

          
          <li>
            <Link to="/" onClick={handleLogout} style={{textDecoration: "none"}}>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
