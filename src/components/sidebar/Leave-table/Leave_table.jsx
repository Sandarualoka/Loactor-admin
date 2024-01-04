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
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./leave_table.scss";

function createData(employeeId, price) {
  return {
    employeeId,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "Annual Leave",
        amount: 3,
        status: "Approved",
      },
      {
        date: "2020-01-02",
        customerId: "Casual Leave",
        amount: 1,
        status: "Approved",
      },
    ],
  };
}

function Row(props) {
  const { row, onDelete, onEdit } = props;
  const [open, setOpen] = React.useState(false);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [editedStatus, setEditedStatus] = React.useState("");

  const handleDeleteClick = () => {
    setDialogOpen(true);
  };

  const handleEditClick = () => {
    setDialogOpen(true);
    setEditedStatus(row.history[0].status);
  };

  const handleConfirmDelete = () => {
    onDelete(row.employeeId);
    setDialogOpen(false);
  };

  const handleCancelDelete = () => {
    setDialogOpen(false);
  };

  const handleSaveEdit = () => {
    // Update the status in the row's history
    const updatedRow = {
      ...row,
      history: [
        {
          ...row.history[0],
          status: editedStatus,
        },
      ],
    };

    // Replace the row with the updated row
    onEdit(updatedRow);
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
          {/* <IconButton color="primary" onClick={handleEditClick}>
            <EditIcon />
          </IconButton> */}
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
                    <TableCell style={{ color: "white" }}>Leave Type</TableCell>
                    <TableCell style={{ color: "white" }}>Status</TableCell>
                    <TableCell style={{ color: "white" }} align="right">
                      Amount
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="right">
                      Edit
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.status}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        <IconButton color="primary" onClick={handleEditClick}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <Dialog
        open={isDialogOpen}
        onClose={handleCancelDelete}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          {editedStatus ? "Edit Status" : "Confirm Delete"}
        </DialogTitle>
        <DialogContent>
          {editedStatus ? (
            <TextField
              label="Status"
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
            />
          ) : (
            <Typography variant="body1" gutterBottom>
              Are you sure you want to delete this row?
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          {editedStatus ? (
            <Button onClick={handleSaveEdit} color="primary">
              Save
            </Button>
          ) : (
            <Button onClick={handleConfirmDelete} color="primary">
              Delete
            </Button>
          )}
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
        status: PropTypes.string.isRequired,
      })
    ).isRequired,
    employeeId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
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

  const handleEditRow = (editedRow) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.employeeId === editedRow.employeeId ? editedRow : row
      )
    );
  };

  const generatePDF = () => {
    const pdf = new jsPDF();

    const columns = ["Employee ID", "Leave Type", "Status", "Amount"];
    const rowsData = rows.map((row) => [
      row.employeeId,
      row.history[0].customerId,
      row.history[0].status,
      row.history[0].amount,
    ]);

    pdf.autoTable({ head: [columns], body: rowsData });

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
            <Row
              key={row.employeeId}
              row={row}
              onDelete={handleDeleteRow}
              onEdit={handleEditRow}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
