// import React from "react";
// import "./sidebar.scss";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { Link } from "react-router-dom";
// import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
// import PersonIcon from "@mui/icons-material/Person";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";

// const Sidebar = () => {
//   const handleLogout = () => {
//     // Clear sessions, local storage, or perform any other necessary tasks
//     localStorage.clear(); // Clear local storage
//   };

//   return (
//     <div className="sidebar" style={{ backgroundColor: "  black" }}>
//       {" "}
//       {/* Add a light background color */}
//       <div className="top">
//         <Link
//           to="/new"
//           style={{
//             textDecoration: "none",
//             marginBottom: "20px",
//             marginTop: "20px",
//           }}
//         >
//           <span className="logo" style={{ color: "white" }}>
//             LOCATOR ADMIN
//           </span>
//         </Link>
//       </div>
//       <hr />
//       <div className="center">
//         <ul>
//           <p className="title" style={{ color: "white" }}>
//             OPTIONS
//           </p>
//           <Link to="/new" style={{ textDecoration: "none" }}>
//             <li style={{ color: "white", marginBottom: "25px" }}>
//               <PersonIcon className="icon" style={{ color: "white" }} />
//               <span style={{ color: "white", marginBottom: "10px" }}>
//                 Add New Employee
//               </span>
//             </li>
//           </Link>

//           <Link to="/bulk" style={{ textDecoration: "none" }}>
//             <li style={{ color: "white", marginBottom: "25px" }}>
//               <GroupAddIcon className="icon" style={{ color: "white" }} />
//               <span style={{ color: "white", marginBottom: "10px" }}>
//                 Add Bulk Employees
//               </span>
//             </li>
//           </Link>

//           <Link to="/view" style={{ textDecoration: "none" }}>
//             <li style={{ color: "white", marginBottom: "25px" }}>
//               <FormatListNumberedIcon
//                 className="icon"
//                 style={{ color: "white" }}
//               />
//               <span style={{ color: "white", marginBottom: "10px" }}>
//                 View Employees
//               </span>
//             </li>
//           </Link>

//           <Link to="/viewDetails" style={{ textDecoration: "none" }}>
//             <li style={{ color: "white", marginBottom: "25px" }}>
//               <FilterAltIcon className="icon" style={{ color: "white" }} />
//               <span style={{ color: "white", marginBottom: "10px" }}>
//                 View Employee Details
//               </span>
//             </li>
//           </Link>

//           <li>
//             <Link
//               to="/"
//               onClick={handleLogout}
//               style={{
//                 textDecoration: "none",
//                 color: "white",
//                 marginBottom: "30px",
//               }}
//             >
//               <LogoutIcon className="icon" style={{ color: "white" }} />
//               <span style={{ color: "white", marginBottom: "10px" }}>
//                 Logout
//               </span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import "./sidebar.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PersonIcon from "@mui/icons-material/Person";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Atdn from "../../assets/atdn.png";

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

        <img
          src={Atdn}
          style={{ width: "200px", height: "200px", marginLeft: "20px" }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
