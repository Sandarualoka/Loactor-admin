import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import Sidebar from '../../components/sidebar/Sidebar';
import './view.scss';

const View = () => {
  // Sample employee data
  const employeeData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more employee data as needed
  ];

  return (
    <div className="view">
        <Sidebar/>
        <div className="viewContainer">
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell>Employee Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeData.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
    </div>
  )
};

export default View;
