// // // Your original file
// // import React from "react";
// // import "./vacDate.scss";
// // import Sidebar from "../../components/sidebar/Sidebar";
// // import VacDateImg from "../../assets/vac-date.jpg";

// // const VacDate = () => {
// //   return (
// //     <div>
// //       <div className="re_leave">
// //         <div className="sticky top-0 z-50">
// //           <Sidebar />
// //         </div>

// //         <div className="vac-cover">
// //           <img src={VacDateImg} alt="vac-date" className="vac-img" />
// //         </div>

// //         <div className="vac-heading">
// //           <h1 className="header-vacation">Select Vacation Dates Here</h1>
// //         </div>

// //         <div className="calendarVac">

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VacDate;

// // Your original file
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./vacDate.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import VacDateImg from "../../assets/vac-date.jpg";

// const VacDate = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleSaveDate = () => {
//     // Handle saving selected date here
//     console.log("Selected Date:", selectedDate);
//   };

//   return (
//     <div>
//       <div className="re_leave">
//         <div className="sticky top-0 z-50">
//           <Sidebar />
//         </div>

//         <div className="vac-cover">
//           <img src={VacDateImg} alt="vac-date" className="vac-img" />
//         </div>

//         <div className="vac-heading">
//           <h1 className="header-vacation">Select Vacation Date Here</h1>
//         </div>

//         <div className="calendarVac">
//           <DatePicker
//             selected={selectedDate}
//             onChange={handleDateChange}
//             inline
//           />
//         </div>

//         <button onClick={handleSaveDate}>Save</button>
//       </div>
//     </div>
//   );
// };

// export default VacDate;
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./vacDate.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import VacDateImg from "../../assets/vac-date.jpg";

const VacDate = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (date) => {
    console.log("New Date:", date);
    console.log("Selected Dates:", selectedDates);
    // ... rest of the function
  };

  const handleSaveDates = () => {
    console.log("Selected Dates:", selectedDates);
    // Implement your logic to save the dates to the backend here
  };

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

        <div className="calendarVac">
          <DatePicker
            selectedDates={selectedDates}
            onChange={handleDateChange}
          />
        </div>

        <button onClick={handleSaveDates}>Save</button>
      </div>
    </div>
  );
};

export default VacDate;
