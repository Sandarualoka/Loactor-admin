import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import MopedIcon from '@mui/icons-material/Moped';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
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
            <span className='logo'>Locator ADMIN</span>

            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
            <p className='title'>MAIN</p>
               <Link to="/home" style={{textDecoration : "none"}}>
               <li>
                <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
               </Link>
                
                <p className='title'>LISTS</p>

                

                <Link to="/users" style={{textDecoration : "none"}}>
                    <li>
                        <PersonIcon className="icon"/>
                        <span > Registered Students</span>
                    </li>
                </Link>

                <Link to="/products" style={{textDecoration : "none"}}>
                    <li>
                        <ProductionQuantityLimitsIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>


                <Link to="/video"  style={{textDecoration : "none"}}>
                <li>
                    <CameraAltIcon className="icon"/>
                    <span>Video Uploading</span>
                </li>
                </Link>
                <li>
                    <MopedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFULL LINKS</p>

                <li>
                    <EqualizerIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon" />
                    <span>Notification</span>
                </li>
                <p className='title'>SERVICE</p>

                <li>
                    <FavoriteIcon className="icon"/>
                    <span>System Helath</span>
                </li>
                <li>
                    <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>

                <li>
                    <AccountBoxIcon className="icon"/>
                    <span>Profiles</span>
                </li>

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

