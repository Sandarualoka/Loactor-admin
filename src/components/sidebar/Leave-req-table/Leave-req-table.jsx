// import React, { useState, useEffect } from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import Leave_Btn from "../Leave_Btn/Leave_btn";

// const columns = [
//   { id: "employeeId", label: "Employee ID", minWidth: 170 },
//   { id: "employeeName", label: "Employee Name", minWidth: 170 },
//   { id: "date", label: "Date", minWidth: 170 },
//   { id: "leaveType", label: "Leave Type", minWidth: 170 }, // New column
//   {
//     id: "status",
//     label: "Status",
//     minWidth: 170,
//     align: "center",
//     format: (value, rowIndex, handleLeaveClick) => (
//       <Leave_Btn status={value} onClick={() => handleLeaveClick(rowIndex)} />
//     ),
//   },
// ];

// function createData(employeeId, employeeName, date, status, leaveType) {
//   return { employeeId, employeeName, date, status, leaveType };
// }

// export default function StickyHeadTable() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     // Fetch data from your backend API here
//     const fetchData = async () => {
//       try {
//         const response = await fetch("your_backend_api_url");
//         const data = await response.json();

//         // Assuming your backend returns an array of objects with the required properties
//         const formattedData = data.map((item) =>
//           createData(
//             item.employeeId,
//             item.employeeName,
//             item.date,
//             item.status,
//             item.leaveType
//           )
//         );

//         setTableData(formattedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setPage(0);
//   };

//   const handleLeaveClick = (rowIndex) => {
//     const updatedData = [...tableData];
//     const currentStatus = updatedData[rowIndex].status;

//     // Update status based on the current status
//     switch (currentStatus) {
//       case "Approved":
//         updatedData[rowIndex].status = "Not Approved";
//         break;
//       case "Not Approved":
//         updatedData[rowIndex].status = "Pending";
//         break;
//       case "Pending":
//         updatedData[rowIndex].status = "Approved";
//         break;
//       default:
//         break;
//     }

//     setTableData(updatedData);
//   };

//   const filteredRows = tableData.filter(
//     (row) =>
//       row.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.date.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Paper sx={{ width: "100%", overflow: "hidden" }}>
//       <InputBase
//         className="search-leave"
//         placeholder="Search by Employee ID"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         startAdornment={<SearchIcon />}
//         sx={{ marginBottom: "20px" }}
//       />

//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align || "left"}
//                   style={{
//                     minWidth: column.minWidth,
//                     backgroundColor: "black",
//                     color: "white",
//                   }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredRows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, rowIndex) => {
//                 return (
//                   <TableRow
//                     hover
//                     role="checkbox"
//                     tabIndex={-1}
//                     key={row.employeeId}
//                   >
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell
//                           key={column.id}
//                           align={column.align || "left"}
//                         >
//                           {column.id === "status"
//                             ? column.format(value, rowIndex, handleLeaveClick)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={filteredRows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Leave_Btn from "../Leave_Btn/Leave_btn";

const columns = [
  { id: "employeeId", label: "Employee ID", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "halfDay", label: "Half Day", minWidth: 170 }, // New column
  { id: "shortLeaves", label: "Short Leaves", minWidth: 170 }, // New column
  { id: "casualLeaves", label: "Casual Leaves", minWidth: 170 }, // New column
  { id: "annualLeaves", label: "Annual Leaves", minWidth: 170 }, // New column
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
    format: (value, rowIndex, handleLeaveClick) => (
      <Leave_Btn status={value} onClick={() => handleLeaveClick(rowIndex)} />
    ),
  },
];

function createData(
  employeeId,
  date,
  halfDay,
  shortLeaves,
  casualLeaves,
  annualLeaves,
  status
) {
  return {
    employeeId,
    date,
    halfDay,
    shortLeaves,
    casualLeaves,
    annualLeaves,
    status,
  };
}

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API here
    const fetchData = async () => {
      try {
        const response = await fetch("your_backend_api_url");
        const data = await response.json();

        // Assuming your backend returns an array of objects with the required properties
        const formattedData = data.map((item) =>
          createData(
            item.employeeId,
            item.date,
            item.halfDay,
            item.shortLeaves,
            item.casualLeaves,
            item.annualLeaves,
            item.status
          )
        );

        setTableData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleLeaveClick = (rowIndex) => {
    const updatedData = [...tableData];
    const currentStatus = updatedData[rowIndex].status;

    // Update status based on the current status
    switch (currentStatus) {
      case "Approved":
        updatedData[rowIndex].status = "Not Approved";
        break;
      case "Not Approved":
        updatedData[rowIndex].status = "Pending";
        break;
      case "Pending":
        updatedData[rowIndex].status = "Approved";
        break;
      default:
        break;
    }

    setTableData(updatedData);
  };

  const filteredRows = tableData.filter(
    (row) =>
      row.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <InputBase
        className="search-leave"
        placeholder="Search by Employee ID"
        value={searchTerm}
        onChange={handleSearchChange}
        startAdornment={<SearchIcon />}
        sx={{ marginBottom: "20px" }}
      />

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.employeeId}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align || "left"}
                        >
                          {column.id === "status"
                            ? column.format(value, rowIndex, handleLeaveClick)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
