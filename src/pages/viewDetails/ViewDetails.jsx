

import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import TablePagination from '@mui/material/TablePagination';
import Sidebar from '../../components/sidebar/Sidebar';
import "./viewDetails.scss";

const ViewDetails = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        // Fetch employee data from your backend API
        // Replace 'yourApiEndpoint' with the actual endpoint

        //MEKATA ADD KARAPIYA ENDPOINT EKA---->>>

        fetch('yourApiEndpoint')
            .then(response => response.json())
            .then(data => setEmployeeData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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

    const options = {
        filter: true,
        download: false,
        print: false,
        responsive: 'standard',
        selectableRows: 'none',
        rowsPerPage: rowsPerPage,
        rowsPerPageOptions: [5, 10, 25],
        serverSide: false,
        page: page,
        onTableChange: (action, tableState) => {
            // Handle any additional actions or state changes here
        },
    };

    return (
        <div className="viewDetails">
            <Sidebar />

            <div className="viewDetailsContainer">

            <div className="viewDetailsImg">
                <img src='https://img.freepik.com/free-vector/business-team-working-project-project-management-business-analysis-planning-brainstorming-research-consulting-motivation-concept-vector-isolated-illustration_335657-2244.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais' alt='viewDImage' />
           </div>
                <MUIDataTable
                    title="Employee Data"
                    data={employeeData}
                    columns={columns}
                    options={options}
                />

                {/* Table Pagination */}
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

export default ViewDetails;
