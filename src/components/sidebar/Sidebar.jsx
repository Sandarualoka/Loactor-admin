import React from 'react'
import "./sidebar.scss"
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    
        const navigate = useNavigate();
      
        const handleLogout = () => {
          // Perform logout actions here
          // Clear sessions, local storage, or perform any other necessary tasks
      
          navigate('/'); // Redirect to the login page after logout
        };
      
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration : "none"}}>
            <span className='logo'>LOCATOR ADMIN</span>

            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
            <p className='title'>OPTIONS</p>
    
                <Link to="/new" style={{textDecoration : "none"}}>
                    <li>
                        <PersonIcon className="icon"/>
                        <span >Add New Employee</span>
                    </li>
                </Link>

                <Link to="/view" style={{textDecoration : "none"}}>
                    <li>
                        <PersonIcon className="icon"/>
                        <span >View Employees</span>
                    </li>
                </Link>


                <li onClick={handleLogout}>
                    <LogoutIcon className="icon" />
                    <span>Logout</span>
                </li>



            </ul>
        </div>

        
    </div>
  )
}

export default Sidebar

