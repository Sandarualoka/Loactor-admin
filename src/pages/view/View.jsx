

import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';
import './view.scss';

const AdminPanel = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [employeeData, setEmployeeData] = useState([]);

  const fetchEmployeeData = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT'); // Replace with your backend API endpoint
      if (response.ok) {
        const data = await response.json();
        setEmployeeData(data); // Set the fetched data in state
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
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

  return (
    <div className="view">
      <Sidebar />
      <div className="viewContainer">
        <img src='https://img.freepik.com/free-vector/people-working-as-team-background-flat-style_23-2147768163.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais' alt='teamLogo'/>
        <Table>
          <TableHead className='tHead'>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Employee Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
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
      </div>
    </div>
  );
};

export default AdminPanel;
