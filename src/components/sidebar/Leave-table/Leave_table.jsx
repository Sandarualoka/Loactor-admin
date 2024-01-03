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
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.id}
//                   align="center"
//                   style={{
//                     minWidth: column.minWidth,
//                     backgroundColor: "black",
//                     color: "white",
//                     padding: index === columns.length - 1 ? "8px" : "8px 16px", // Adjust padding
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
//                     {columns.map((column, index) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell
//                           key={column.id}
//                           align="center"
//                           style={{
//                             padding:
//                               index === columns.length - 1 ? "8px" : "8px 16px", // Adjust padding
//                           }}
//                         >
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
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(employeeId, price) {
  return {
    employeeId,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "Annual Leave", // Modified "Leave Type" value
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Casual Leave", // Modified "Leave Type" value
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.employeeId}
        </TableCell>
        {/* Delete column */}
        <TableCell align="right">
          <IconButton color="secondary">
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    {/* Replace "Customer" with "Leave Type" */}
                    <TableCell>Leave Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      {/* Replace "customerId" with "Leave Type" */}
                      <TableCell>{historyRow.customerId}</TableCell>
                      {/* Add "Status" column */}
                      <TableCell>Approved</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    employeeId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("EMP001", 3.99),
  createData("EMP002", 4.99),
  createData("EMP003", 3.79),
  createData("EMP004", 2.5),
  createData("EMP005", 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Employee ID</TableCell>
            {/* Delete column heading */}
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.employeeId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
