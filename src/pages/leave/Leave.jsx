import React from "react";
import "./leave.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import leave from "../../assets/leave.png";
import Leave_table from "../../components/sidebar/Leave-table/Leave_table";

const Leave = () => {
  return (
    <div className="leave">
      <div className="sticky top-0 z-50">
        <Sidebar />
      </div>

      <div className="leaveContainer">
        <div className="leave-content">
          <img src={leave} alt="leave-logo" className="leave-logo" />
        </div>

        <div className="leave-table-container" style={{ marginLeft: "300px" }}>
          <Leave_table />
        </div>
      </div>
    </div>
  );
};

export default Leave;
