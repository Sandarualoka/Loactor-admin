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
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// import DeleteIcon from "@mui/icons-material/Delete";
// import jsPDF from "jspdf";
// import "./leave_table.scss";

// const columns = [
//   { id: "employeeId", label: "Employee ID", minWidth: 170 },
//   { id: "casualLeaves", label: "Casual Leaves", minWidth: 170 },
//   { id: "annualLeaves", label: "Annual Leaves", minWidth: 170 },
//   { id: "halfDay", label: "Half Day", minWidth: 170 },
//   { id: "shortLeaves", label: "Short Leaves", minWidth: 170 },
//   { id: "date", label: "Date", minWidth: 170 },
//   {
//     id: "status",
//     label: "Status",
//     minWidth: 170,
//     align: "center",
//     format: (value) => (value === "Approved" ? "Approved" : "Rejected"),
//   },
//   // New column for delete button
//   {
//     id: "delete",
//     label: "Delete",
//     minWidth: 100,
//     align: "center",
//   },
// ];

// function createData(
//   id, // Unique identifier
//   employeeId,
//   casualLeaves,
//   annualLeaves,
//   halfDay,
//   shortLeaves,
//   date,
//   status
// ) {
//   return {
//     id,
//     employeeId,
//     casualLeaves,
//     annualLeaves,
//     halfDay,
//     shortLeaves,
//     date,
//     status,
//   };
// }

// export default function StickyHeadTable() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [rows, setRows] = useState([
//     createData(1, "EMP001", 2, 5, 1, 3, "2022-01-01", "Approved"),
//     createData(2, "EMP002", 3, 4, 0.5, 2, "2022-01-15", "Rejected"),
//     // Add more rows as needed
//   ]);

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

//   const handleDelete = (id) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//   };

//   const generatePDF = () => {
//     const pdf = new jsPDF();

//     // Set up columns for the table (excluding delete button column)
//     const pdfColumns = [
//       "Employee ID",
//       "Casual Leaves",
//       "Annual Leaves",
//       "Half Day",
//       "Short Leaves",
//       "Date",
//       "Status",
//     ];

//     // Set up rows for the table
//     const pdfRows = rows.map((row) => [
//       row.employeeId,
//       row.casualLeaves,
//       row.annualLeaves,
//       row.halfDay,
//       row.shortLeaves,
//       row.date,
//       row.status,
//     ]);

//     // Add the table to the PDF
//     pdf.autoTable({ head: [pdfColumns], body: pdfRows });

//     // Save the PDF
//     pdf.save("leave_report.pdf");
//   };

//   return (
//     <Paper sx={{ width: "95%", overflow: "hidden" }}>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <InputBase
//           className="search-leave"
//           placeholder="Search by Employee ID"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           startAdornment={<SearchIcon />}
//           sx={{ marginBottom: "20px" }}
//         />
//         <button className="pdfButton" onClick={generatePDF}>
//           <div className="mr-2">
//             <PictureAsPdfIcon />
//           </div>
//           Generate PDF
//         </button>
//       </div>

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
//             {rows
//               .filter((row) =>
//                 row.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
//               )
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align="center">
//                           {column.id === "delete" ? (
//                             <DeleteIcon
//                               style={{ cursor: "pointer" }}
//                               onClick={() => handleDelete(row.id)}
//                             />
//                           ) : column.format ? (
//                             column.format(value)
//                           ) : (
//                             value
//                           )}
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
//         count={rows.length}
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
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteIcon from "@mui/icons-material/Delete";
import jsPDF from "jspdf";
import "./leave_table.scss";

const columns = [
  { id: "employeeId", label: "Employee ID", minWidth: 170 },
  { id: "casualLeaves", label: "Casual Leaves", minWidth: 170 },
  { id: "annualLeaves", label: "Annual Leaves", minWidth: 170 },
  { id: "halfDay", label: "Half Day", minWidth: 170 },
  { id: "shortLeaves", label: "Short Leaves", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
    format: (value) => (value === "Approved" ? "Approved" : "Rejected"),
  },
  // New column for delete button
  {
    id: "delete",
    label: "Delete",
    minWidth: 100,
    align: "center",
  },
];

function createData(
  id, // Unique identifier
  employeeId,
  casualLeaves,
  annualLeaves,
  halfDay,
  shortLeaves,
  date,
  status
) {
  return {
    id,
    employeeId,
    casualLeaves,
    annualLeaves,
    halfDay,
    shortLeaves,
    date,
    status,
  };
}

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [rows, setRows] = useState([
    createData(1, "EMP001", 2, 5, 1, 3, "2022-01-01", "Approved"),
    createData(2, "EMP002", 3, 4, 0.5, 2, "2022-01-15", "Rejected"),
    // Add more rows as needed
  ]);

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

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const generatePDF = () => {
    const pdf = new jsPDF();

    // Set up columns for the table (excluding delete button column)
    const pdfColumns = [
      "Employee ID",
      "Casual Leaves",
      "Annual Leaves",
      "Half Day",
      "Short Leaves",
      "Date",
      "Status",
    ];

    // Set up rows for the table
    const pdfRows = rows.map((row) => [
      row.employeeId,
      row.casualLeaves,
      row.annualLeaves,
      row.halfDay,
      row.shortLeaves,
      row.date,
      row.status,
    ]);

    // Add the table to the PDF
    pdf.autoTable({ head: [pdfColumns], body: pdfRows });

    // Save the PDF
    pdf.save("leave_report.pdf");
  };

  return (
    <Paper sx={{ width: "95%", overflow: "hidden" }}>
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
              {columns.map((column, index) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "black",
                    color: "white",
                    padding: index === columns.length - 1 ? "8px" : "8px 16px", // Adjust padding
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((row) =>
                row.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align="center"
                          style={{
                            padding:
                              index === columns.length - 1 ? "8px" : "8px 16px", // Adjust padding
                          }}
                        >
                          {column.id === "delete" ? (
                            <DeleteIcon
                              style={{ cursor: "pointer" }}
                              onClick={() => handleDelete(row.id)}
                            />
                          ) : column.format ? (
                            column.format(value)
                          ) : (
                            value
                          )}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
