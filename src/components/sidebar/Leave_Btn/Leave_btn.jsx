import React from "react";
import "./Leave_Btn.scss"; // Import the SCSS file

const CustomRadioGroup = () => {
  return (
    <div className="container">
      <div className="custom-radio">
        <input type="radio" id="radio-1" name="tabs" defaultChecked />
        <label className="radio-label" htmlFor="radio-1">
          <div className="radio-circle"></div>
          <span className="radio-text">Approved</span>
        </label>
        <input type="radio" id="radio-2" name="tabs" />
        <label className="radio-label" htmlFor="radio-2">
          <div className="radio-circle"></div>
          <span className="radio-text">Not Approved</span>
        </label>
        <input type="radio" id="radio-3" name="tabs" />
        <label className="radio-label" htmlFor="radio-3">
          <div className="radio-circle"></div>
          <span className="radio-text">Pending</span>
        </label>
      </div>
    </div>
  );
};

export default CustomRadioGroup;
