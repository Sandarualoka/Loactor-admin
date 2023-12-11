import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import "./view.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { format } from "date-fns";
const AdminPanel = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [employeeData, setEmployeeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const fetchEmployeeData = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        "https://backattendance.tfdatamaster.com/api/dashboard/allusers",
        {
          method: "GET",
          headers: {
            "auth-token": `${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json", // Set content type to JSON
          },
        }
      ); // Replace with your backend API endpoint
      if (response.ok) {
        const data = await response.json();
        setEmployeeData(data); // Set the fetched data in state
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    // Fetch data when the component mounts
    fetchEmployeeData();
  }, []); // Empty dependency array to execute only once
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleUpdateClick = (employee) => {
    setSelectedEmployee(employee);
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedEmployee(null);
    setNewPassword("");
  };
  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleDialogSubmit = () => {
    // Call the reset-password API with the selectedEmployee.employeeid and newPassword
    const token = localStorage.getItem("accessToken");
    const apiUrl =
      "https://backattendance.tfdatamaster.com/api/users/reset-password";

    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "auth-token": `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employeeid: selectedEmployee.employeeid,
        newPassword: newPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Reset Password Response:", data);
        handleDialogClose(); // Close the dialog after submission
        // You may want to handle success and error cases appropriately
        if (data.message === "Password reset successful") {
          // Show success message
          toast.success("Password updated successfully");
        } else {
          // Show error message
          toast.error("Failed to update password");
        }
      })
      .catch((error) => {
        console.error("Error resetting password:", error);
        // Handle the error
        toast.error("An error occurred");
      });
  };
  return (
    <div className="view">
      <div className="sticky">
        <Sidebar />
      </div>

      <div className="viewContainer">
        <div className="viewImg">
          <img
            className="logoEmployeeGrp"
            src="https://img.freepik.com/free-vector/people-working-as-team-background-flat-style_23-2147768163.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais"
            alt="teamLogo"
          />
        </div>

        <TextField
          style={{ marginLeft: "27px" }}
          label="Search by Employee ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Table className="tableView">
          <TableHead className="tHead">
            <TableRow>
              <TableCell style={{ color: "white", fontSize: "20px" }}>
                Employee ID
              </TableCell>
              <TableCell style={{ color: "white", fontSize: "20px" }}>
                Date
              </TableCell>
              <TableCell style={{ color: "white", fontSize: "20px" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData
              .filter((employee) =>
                employee.employeeid
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.employeeid}</TableCell>
                  <TableCell>
                    {format(new Date(employee.date), "yyyy-MM-dd HH:mm:ss")}
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleUpdateClick(employee)}>
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={employeeData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {/* Update Password Dialog */}
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Update Password</DialogTitle>
          <DialogContent>
            <p>Employee ID: {selectedEmployee?.employeeid}</p>
            <TextField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button onClick={handleDialogSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
        <ToastContainer />
      </div>
    </div>
  );
};
export default AdminPanel;
