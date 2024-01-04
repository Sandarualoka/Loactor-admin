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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import jsPDF from "jspdf";
import "jspdf-autotable";

function createData(employeeId, price) {
  return {
    employeeId,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "Annual Leave",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Casual Leave",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row, onDelete } = props;
  const [open, setOpen] = React.useState(false);
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const handleDeleteClick = () => {
    setDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(row.employeeId);
    setDialogOpen(false);
  };

  const handleCancelDelete = () => {
    setDialogOpen(false);
  };

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
        <TableCell align="right">
          <IconButton color="secondary" onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                style={{ fontWeight: "800" }}
                variant="h6"
                gutterBottom
                component="div"
              >
                History
              </Typography>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow style={{ backgroundColor: "#B2B2B2" }}>
                    <TableCell style={{ color: "white" }}>Date</TableCell>
                    {/* Replace "Customer" with "Leave Type" */}
                    <TableCell style={{ color: "white" }}>Leave Type</TableCell>
                    <TableCell style={{ color: "white" }}>Status</TableCell>
                    <TableCell style={{ color: "white" }} align="right">
                      Amount
                    </TableCell>
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
              {/* ... (remaining code remains unchanged) ... */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCancelDelete}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to delete this row?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
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
  onDelete: PropTypes.func.isRequired,
};

const CollapsibleTable = () => {
  const [rows, setRows] = React.useState([
    createData("EMP001", 3.99),
    createData("EMP002", 4.99),
    createData("EMP003", 3.79),
    createData("EMP004", 2.5),
    createData("EMP005", 1.5),
  ]);

  const handleDeleteRow = (employeeId) => {
    setRows((prevRows) =>
      prevRows.filter((row) => row.employeeId !== employeeId)
    );
  };

  const generatePDF = () => {
    const pdf = new jsPDF();

    // Set up columns for the table
    const columns = ["Employee ID", "Leave Type", "Status", "Amount"];

    // Set up rows for the table
    const rowsData = rows.map((row) => [
      row.employeeId,
      row.history[0].customerId,
      "Approved", // You can customize the status as needed
      row.history[0].amount,
    ]);

    // Add the table to the PDF
    pdf.autoTable({ head: [columns], body: rowsData });

    // Save the PDF
    pdf.save("leave_history_report.pdf");
  };

  return (
    <TableContainer component={Paper}>
      <button className="pdfButton" onClick={generatePDF}>
        <div className="mr-2">
          <PictureAsPdfIcon />
        </div>
        Generate PDF
      </button>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: "black" }}>
            <TableCell />
            <TableCell style={{ color: "white" }}>Employee ID</TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.employeeId} row={row} onDelete={handleDeleteRow} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
