
// import React, { useEffect, useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TablePagination from '@mui/material/TablePagination';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import Sidebar from '../../components/sidebar/Sidebar';
// import './viewDetails.scss';

// const ViewDetails = () => {
//   const [employeeData, setEmployeeData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   useEffect(() => {
//     // Fetch employee data from your backend API
//     // Replace 'yourApiEndpoint' with the actual endpoint

//     // MEKATA ADD KARAPIYA ENDPOINT EKA---->>>

//     fetch('yourApiEndpoint')
//       .then(response => response.json())
//       .then(data => {
//         setEmployeeData(data);
//         setFilteredData(data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleStartDateChange = (event) => {
//     setStartDate(new Date(event.target.value));
//     filterData(new Date(event.target.value), endDate);
//   };

//   const handleEndDateChange = (event) => {
//     setEndDate(new Date(event.target.value));
//     filterData(startDate, new Date(event.target.value));
//   };

//   const filterData = (start, end) => {
//     const filtered = employeeData.filter((employee) => {
//       const inTime = new Date(employee.inTime);
//       const outTime = new Date(employee.outTime);

//       return (!start || inTime >= start) && (!end || outTime <= end);
//     });

//     setFilteredData(filtered);
//   };

//   const columns = [
//     {
//       name: 'employeeId',
//       label: 'Employee ID',
//     },
//     {
//       name: 'inTime',
//       label: 'In Time',
//     },
//     {
//       name: 'outTime',
//       label: 'Out Time',
//     },
//     {
//       name: 'inLocation',
//       label: 'In Location',
//     },
//     {
//       name: 'outLocation',
//       label: 'Out Location',
//     },
//   ];

//   return (
//     <div className="viewDetails">
//       <Sidebar />
//       <div className="viewDetailsContainer">
//         <div className="viewDetailsImg bounceEffect">
//           <img src='https://img.freepik.com/free-vector/business-team-working-project-project-management-business-analysis-planning-brainstorming-research-consulting-motivation-concept-vector-isolated-illustration_335657-2244.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais' alt='viewDImage' />
//         </div>

//         {/* Date Pickers */}
//         <div className="dateFilterContainer">
//           <TextField
//           className='textfiled1'
//             id="startDate"
//             label="Start Date"
//             type="date"
//             value={startDate ? startDate.toISOString().split('T')[0] : ''}
//             onChange={handleStartDateChange}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//           <TextField
//             id="endDate"
//             label="End Date"
//             type="date"
//             value={endDate ? endDate.toISOString().split('T')[0] : ''}
//             onChange={handleEndDateChange}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//           <IconButton color="primary">
//             <CalendarTodayIcon />
//           </IconButton>
//         </div>

//         {/* Table */}
//         <Table>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.name}>{column.label}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
//               <TableRow key={employee.employeeId}>
//                 {columns.map((column) => (
//                   <TableCell key={column.name}>{employee[column.name]}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         {/* Table Pagination */}
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={filteredData.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default ViewDetails;

import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Sidebar from '../../components/sidebar/Sidebar';
import './viewDetails.scss';

const ViewDetails = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch employee data from your backend API
    // Replace 'yourApiEndpoint' with the actual endpoint

    fetch('yourApiEndpoint')
      .then(response => response.json())
      .then(data => {
        setEmployeeData(data);
        setFilteredData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    // Filter data based on search term
    const filtered = employeeData.filter(employee => employee.employeeId.includes(searchTerm));
    setFilteredData(filtered);
  }, [searchTerm, employeeData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStartDateChange = (event) => {
    setStartDate(new Date(event.target.value));
    filterData(new Date(event.target.value), endDate);
  };

  const handleEndDateChange = (event) => {
    setEndDate(new Date(event.target.value));
    filterData(startDate, new Date(event.target.value));
  };

  const filterData = (start, end) => {
    const filtered = employeeData.filter((employee) => {
      const inTime = new Date(employee.inTime);
      const outTime = new Date(employee.outTime);

      return (!start || inTime >= start) && (!end || outTime <= end);
    });

    setFilteredData(filtered);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const columns = [
    {
      name: 'employeeId',
      label: 'Employee ID',
    },
    {
      name: 'inTime',
      label: 'In Time',
    },
    {
      name: 'outTime',
      label: 'Out Time',
    },
    {
      name: 'inLocation',
      label: 'In Location',
    },
    {
      name: 'outLocation',
      label: 'Out Location',
    },
  ];

  return (
    <div className="viewDetails">
      <Sidebar />
      <div className="viewDetailsContainer">
        <div className="viewDetailsImg">
          <img src='https://img.freepik.com/free-vector/business-team-working-project-project-management-business-analysis-planning-brainstorming-research-consulting-motivation-concept-vector-isolated-illustration_335657-2244.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais' alt='viewDImage' />
        </div>

        {/* Date Pickers */}
        <div className="dateFilterContainer">
          <TextField
            id="startDate"
            label="Start Date"
            type="date"
            value={startDate ? startDate.toISOString().split('T')[0] : ''}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="endDate"
            label="End Date"
            type="date"
            value={endDate ? endDate.toISOString().split('T')[0] : ''}
            onChange={handleEndDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <IconButton color="primary">
            <CalendarTodayIcon />
          </IconButton>
        </div>

        {/* Search Bar */}
        <div className="searchBarContainer">
          <TextField
            id="search"
            label="Search by ID"
            value={searchTerm}
            onChange={handleSearch}
          />
          <IconButton color="primary">
            <SearchIcon />
          </IconButton>
        </div>

        {/* Table */}
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.name}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
              <TableRow key={employee.employeeId}>
                {columns.map((column) => (
                  <TableCell key={column.name}>{employee[column.name]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Table Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default ViewDetails;
