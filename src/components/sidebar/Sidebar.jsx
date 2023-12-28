import React from "react";
import "./sidebar.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PersonIcon from "@mui/icons-material/Person";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Atdn from "../../assets/atdn.png";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar" style={{ backgroundColor: "black" }}>
      <div className="top">
        <Link
          to="/new"
          style={{
            textDecoration: "none",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <span className="logo" style={{ color: "white" }}>
            LOCATOR ADMIN
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title" style={{ color: "white" }}>
            OPTIONS
          </p>
          <Link to="/new" style={{ textDecoration: "none" }}>
            <li className={location.pathname === "/new" ? "active" : ""}>
              <PersonIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white", marginBottom: "10px" }}>
                Add New Employee
              </span>
            </li>
          </Link>

          <Link to="/bulk" style={{ textDecoration: "none" }}>
            <li className={location.pathname === "/bulk" ? "active" : ""}>
              <GroupAddIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white", marginBottom: "10px" }}>
                Add Bulk Employees
              </span>
            </li>
          </Link>

          <Link to="/view" style={{ textDecoration: "none" }}>
            <li className={location.pathname === "/view" ? "active" : ""}>
              <FormatListNumberedIcon
                className="icon"
                style={{ color: "white" }}
              />
              <span style={{ color: "white", marginBottom: "10px" }}>
                View Employees
              </span>
            </li>
          </Link>

          <Link to="/viewDetails" style={{ textDecoration: "none" }}>
            <li
              className={location.pathname === "/viewDetails" ? "active" : ""}
            >
              <FilterAltIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white", marginBottom: "10px" }}>
                View Employee Details
              </span>
            </li>
          </Link>

          <Link to="/leave" style={{ textDecoration: "none" }}>
            <li className={location.pathname === "/leave" ? "active" : ""}>
              <WorkOffIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white", marginBottom: "10px" }}>
                View Leaves
              </span>
            </li>
          </Link>

          <Link to="/req_leave" style={{ textDecoration: "none" }}>
            <li className={location.pathname === "/req_leave" ? "active" : ""}>
              <RingVolumeIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white", marginBottom: "10px" }}>
                Requested Leaves
              </span>
            </li>
          </Link>

          <Link to="/vac_leave" style={{ textDecoration: "none" }}>
            <li className={location.pathname === "/vac_leave" ? "active" : ""}>
              <CalendarMonthIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white", marginBottom: "10px" }}>
                Select Vacation Dates
              </span>
            </li>
          </Link>

          <li>
            <Link
              to="/"
              onClick={() => localStorage.clear()}
              style={{
                textDecoration: "none",
                color: "white",
                marginBottom: "30px",
              }}
            >
              <LogoutIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white", marginBottom: "10px" }}>
                Logout
              </span>
            </Link>
          </li>
        </ul>

        {/* <img
          src={Atdn}
          style={{
            width: "100px",
            height: "100px",
            marginLeft: "30px",
            marginBottom: "15px",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Sidebar;
