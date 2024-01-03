// // import React, { useState } from "react";
// // import Calendar from "react-calendar";
// // import "react-calendar/dist/Calendar.css";
// // import "./vacDate.scss";
// // import Sidebar from "../../components/sidebar/Sidebar";
// // import VacDateImg from "../../assets/vac-date.jpg";

// // const VacDate = () => {
// //   const [selectedDates, setSelectedDates] = useState([]);

// //   const handleDateChange = (date) => {
// //     setSelectedDates(date);
// //   };

// //   const handleSaveDates = () => {
// //     console.log("Selected Dates:", selectedDates);
// //     // Implement your logic to save the dates to the backend here
// //   };

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

// //         <div className="calendar-sel">
// //           <div className="calendarVac">
// //             <Calendar
// //               selectRange
// //               onChange={handleDateChange}
// //               value={selectedDates}
// //             />
// //           </div>

// //           <div className="selected-dates-input">
// //             <input
// //               type="text"
// //               value={
// //                 selectedDates.length > 0
// //                   ? selectedDates.map((date) => date.toDateString()).join(", ")
// //                   : ""
// //               }
// //               readOnly
// //             />
// //           </div>
// //           <button onClick={handleSaveDates}>Save</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VacDate;

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./vacDate.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import VacDateImg from "../../assets/vac-date.jpg";

// const VacDate = () => {
//   const [selectedDates, setSelectedDates] = useState([]);

//   const handleDateChange = (date) => {
//     // Toggle date selection
//     if (selectedDates.includes(date)) {
//       setSelectedDates(selectedDates.filter((d) => d !== date));
//     } else {
//       setSelectedDates([...selectedDates, date]);
//     }
//   };

//   const handleSaveDates = () => {
//     console.log("Selected Dates:", selectedDates);
//     // Implement your logic to save the dates to the backend here
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
//           <h1 className="header-vacation">Select Vacation Dates Here</h1>
//         </div>

//         <div className="calendar-sel">
//           <div className="calendarVac">
//             <Calendar onChange={handleDateChange} value={selectedDates} />
//           </div>

//           <div className="selected-dates-input">
//             <input
//               type="text"
//               value={
//                 selectedDates.length > 0
//                   ? selectedDates.map((date) => date.toDateString()).join(", ")
//                   : ""
//               }
//               readOnly
//             />
//           </div>
//           <button onClick={handleSaveDates}>Save</button>
//         </div>
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
    // Toggle date selection
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
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

        <div className="calendar-sel">
          <div className="calendarVac">
            <DatePicker
              selected={selectedDates}
              onChange={handleDateChange}
              inline
            />
          </div>

          <div className="selected-dates-input">
            <input
              type="text"
              value={
                selectedDates.length > 0
                  ? selectedDates.map((date) => date.toDateString()).join(", ")
                  : ""
              }
              readOnly
            />
          </div>
          <button onClick={handleSaveDates}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default VacDate;
