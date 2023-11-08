import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';
import './view.scss';

const AdminPanel = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Sample employee data (you can replace this with your actual data)
  const employeeData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 2, name: 'Jane Smith' },
    { id: 2, name: 'Jane Smith' },
    { id: 2, name: 'Jane Smith' },
    { id: 2, name: 'Jane Smith' },
    { id: 2, name: 'Jane Smith' },

    { id: 2, name: 'Jane Smith' },
    
    { id: 2, name: 'Jane Smith' },
    { id: 2, name: 'Jane Smith' },
    // Add more employee data as needed
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="view">
        <Sidebar/>
        <div className="viewContainer">

            <img className='teamLogo ' src='https://img.freepik.com/free-vector/people-working-as-team-background-flat-style_23-2147768163.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais' alt='teamLogo'/>
        <Table>
        <TableHead>
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
