import React from "react";
import "./reportSales.scss";
import Sales from "../../components/sidebar/Sales-report/Sales";
import SalesImg from "../../assets/sales.jpg";
import Sidebar from "../../components/sidebar/Sidebar";

const ReportSales = () => {
  return (
    <div className="sales">
      <div className="sticky top-0 z-50">
        <Sidebar />
      </div>

      <div className="salesContainer">
        <div className="sales-content">
          <img src={SalesImg} alt="logo" className="sales-logo" />
        </div>

        <div className="sales-table-container" style={{ marginLeft: "300px" }}>
          <Sales />
        </div>
      </div>
    </div>
  );
};

export default ReportSales;
