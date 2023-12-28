import React from "react";
import "./vacDate.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import VacDateImg from "../../assets/vac-date.jpg";

const VacDate = () => {
  return (
    <div>
      <div className="re_leave">
        <div className="sticky top-0 z-50">
          <Sidebar />
        </div>

        <div className="vac-cover">
          <img src={VacDateImg} alt="vac-date" className="vac-img" />
        </div>

        <div className="vac-heading">
          <h1 className="header-vacation">Select Vacation Dates Here</h1>
        </div>

        <div className="calendarVac"></div>
      </div>
    </div>
  );
};

export default VacDate;
