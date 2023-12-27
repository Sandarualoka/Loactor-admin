// // import * as React from "react";
// // import Paper from "@mui/material/Paper";
// // import Table from "@mui/material/Table";
// // import TableBody from "@mui/material/TableBody";
// // import TableCell from "@mui/material/TableCell";
// // import TableContainer from "@mui/material/TableContainer";
// // import TableHead from "@mui/material/TableHead";
// // import TablePagination from "@mui/material/TablePagination";
// // import TableRow from "@mui/material/TableRow";
// // import "./leave_table.scss";

// // const columns = [
// //   { id: "employeeId", label: "Employee ID", minWidth: 170 },
// //   { id: "name", label: "Name", minWidth: 170 },
// //   { id: "annualLeave", label: "Annual Leave", minWidth: 170 },
// //   { id: "shortLeave", label: "Short Leave", minWidth: 170 },
// // ];

// // function createData(employeeId, name, annualLeave, shortLeave) {
// //   return { employeeId, name, annualLeave, shortLeave };
// // }

// // const rows = [
// //   createData("EMP001", "John Doe", 20, 5),
// //   createData("EMP002", "Jane Smith", 18, 3),
// //   // Add more rows as needed
// // ];

// // export default function StickyHeadTable() {
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(+event.target.value);
// //     setPage(0);
// //   };

// //   return (
// //     <Paper sx={{ width: "100%", overflow: "hidden" }}>
// //       <TableContainer sx={{ maxHeight: 440 }}>
// //         <Table stickyHeader aria-label="sticky table">
// //           <TableHead>
// //             <TableRow>
// //               {columns.map((column) => (
// //                 <TableCell
// //                   key={column.id}
// //                   align="center" // Adjust alignment as needed
// //                   style={{
// //                     minWidth: column.minWidth,
// //                     backgroundColor: "black",
// //                     color: "white",
// //                   }}
// //                 >
// //                   {column.label}
// //                 </TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {rows
// //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //               .map((row) => {
// //                 return (
// //                   <TableRow
// //                     hover
// //                     role="checkbox"
// //                     tabIndex={-1}
// //                     key={row.employeeId}
// //                   >
// //                     {columns.map((column) => {
// //                       const value = row[column.id];
// //                       return (
// //                         <TableCell key={column.id} align="center">
// //                           {value}
// //                         </TableCell>
// //                       );
// //                     })}
// //                   </TableRow>
// //                 );
// //               })}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       <TablePagination
// //         rowsPerPageOptions={[10, 25, 100]}
// //         component="div"
// //         count={rows.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //         onRowsPerPageChange={handleChangeRowsPerPage}
// //       />
// //     </Paper>
// //   );
// // }

// import React, { useState } from "react";
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
// import "./leave_table.scss";

// const columns = [
//   { id: "employeeId", label: "Employee ID", minWidth: 170 },
//   { id: "name", label: "Name", minWidth: 170 },
//   { id: "annualLeave", label: "Annual Leave", minWidth: 170 },
//   { id: "shortLeave", label: "Short Leave", minWidth: 170 },
// ];

// function createData(employeeId, name, annualLeave, shortLeave) {
//   return { employeeId, name, annualLeave, shortLeave };
// }

// export default function StickyHeadTable() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchTerm, setSearchTerm] = useState("");

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

//   const rows = [
//     createData("EMP001", "John Doe", 20, 5),
//     createData("EMP002", "Jane Smith", 18, 3),
//     // Add more rows as needed
//   ];

//   const filteredRows = rows.filter((row) =>
//     row.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
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
//                   align="center"
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
//               .map((row) => {
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
//                         <TableCell key={column.id} align="center">
//                           {value}
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

import React, { useState } from "react";
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
import "./leave_table.scss";
import jsPDF from "jspdf";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const columns = [
  { id: "employeeId", label: "Employee ID", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "annualLeave", label: "Annual Leave", minWidth: 170 },
  { id: "shortLeave", label: "Short Leave", minWidth: 170 },
];

function createData(employeeId, name, annualLeave, shortLeave) {
  return { employeeId, name, annualLeave, shortLeave };
}

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

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

  const rows = [
    createData("EMP001", "John Doe", 20, 5),

    // Add more rows as needed
  ];

  const filteredRows = rows.filter((row) =>
    row.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generatePDF = () => {
    const pdf = new jsPDF();

    // Set up columns for the table
    const pdfColumns = ["Employee ID", "Name", "Annual Leave", "Short Leave"];

    // Set up rows for the table
    const pdfRows = filteredRows.map((row) => [
      row.employeeId,
      row.name,
      row.annualLeave,
      row.shortLeave,
    ]);

    // Add the table to the PDF
    pdf.autoTable({ head: [pdfColumns], body: pdfRows });

    // Save the PDF
    pdf.save("leave_report.pdf");
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <InputBase
          className="search-leave"
          placeholder="Search by Employee ID"
          value={searchTerm}
          onChange={handleSearchChange}
          startAdornment={<SearchIcon />}
          sx={{ marginBottom: "20px" }}
        />
        <button className="pdfButton" onClick={generatePDF}>
          <div className="mr-2">
            <PictureAsPdfIcon />
          </div>
          Generate PDF
        </button>
      </div>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
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
              .map((row) => {
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
                        <TableCell key={column.id} align="center">
                          {value}
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
