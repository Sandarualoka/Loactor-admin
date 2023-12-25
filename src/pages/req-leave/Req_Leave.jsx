// import React from "react";
// import "./req_leave.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import leaveReq from "../../assets/leave-req.png";
// import Leave_req_table from "../../components/sidebar/Leave-req-table/Leave-req-table";

// const Req_Leave = () => {
//   return (
//     <div className="req_leave">
//       <div className="sticky top-0 z-50">
//         <Sidebar />
//       </div>

//       <div className="leaveReqContainer">
//         <img src={leaveReq} alt="leave-logo" className="leaveReq-logo" />
//       </div>
//       <br />
//       <Leave_req_table />
//     </div>
//   );
// };

// export default Req_Leave;

import React from "react";
import "./req_leave.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import leaveReq from "../../assets/leave-req.png";
import LeaveReqTable from "../../components/sidebar/Leave-req-table/Leave-req-table";

const Req_Leave = () => {
  return (
    <div>
      <div className="req_leave">
        <div className="sticky top-0 z-50">
          <Sidebar />
        </div>

        <div className="upper-section">
          <div className="leaveReqContainer">
            <img src={leaveReq} alt="leave-logo" className="leaveReq-logo" />
          </div>
        </div>
      </div>

      <div className="leaveReqTable">
        <LeaveReqTable />
      </div>
    </div>
  );
};

export default Req_Leave;
