import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RoomIcon from "@mui/icons-material/Room";
import Sidebar from "../../components/sidebar/Sidebar";
import "./viewDetails.scss";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Papa from "papaparse";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const ViewDetails = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch data based on filters
  const fetchData = async () => {
    // Replace 'yourApiEndpoint' with the actual endpoint
    const token = localStorage.getItem("accessToken");
    const apiUrl = `https://backattendance.tfdatamaster.com/api/attendance/getAttendance?startDate=${
      startDate.toISOString().split("T")[0]
    }&endDate=${endDate.toISOString().split("T")[0]}&employeeid=${searchTerm}`;
    console.log("URL:", apiUrl);
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "auth-token": `${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setEmployeeData(data);
        setFilteredData(data);
        console.log("DATA:", data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Effect to fetch data when filters change
  useEffect(() => {
    fetchData();
  }, [startDate, endDate, searchTerm]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStartDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setStartDate(selectedDate);
  };

  const handleEndDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setEndDate(selectedDate);
  };

  const generatePDF = () => {
    const pdf = new jsPDF();

    // Set up columns for the table
    const columns = [
      "Employee ID",
      "Status",
      "Time",
      "Latitude",
      "Longitude",
      "Address",
      "Map",
    ];

    // Set up rows for the table
    const rows = filteredData.map((employee) => [
      employee.employeeid,
      employee.status,
      employee.time,
      employee.latitude,
      employee.longitude,
      employee.address,
      "",
    ]);

    // Add the table to the PDF
    pdf.autoTable({ head: [columns], body: rows });

    // Save the PDF
    pdf.save("attendance_report.pdf");
  };

  const downloadCSV = () => {
    const csvData = Papa.unparse(filteredData, {
      quotes: true, // Add quotes around each field
      header: true, // Include header in the CSV
    });

    const blob = new Blob([csvData], { type: "text/csv" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "attendance_data.csv";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const filterData = () => {
    // Filter data based on date range
    const filtered = employeeData.filter((employee) => {
      const employeeDate = new Date(employee.time);
      return (
        (!startDate || employeeDate >= startDate) &&
        (!endDate || employeeDate <= endDate)
      );
    });

    // Filter further based on search term
    const filteredWithSearchTerm = filtered.filter((employee) =>
      employee.employeeid.includes(searchTerm)
    );

    setFilteredData(filteredWithSearchTerm);
  };

  const handleSearch = () => {
    filterData();
  };

  const columns = [
    {
      name: "employeeid",
      label: "Employee ID",
    },
    {
      name: "status",
      label: "Status",
    },
    {
      name: "time",
      label: "Time",
    },
    {
      name: "latitude",
      label: "Latitude",
    },
    {
      name: "longitude",
      label: "Longitude",
    },
    {
      name: "address",
      label: "Address",
    },
    {
      name: "map",
      label: "Map",
    },
  ];

  const openGoogleMaps = (latitude, longitude) => {
    const googleMapsLink = `http://www.google.com/maps/place/${latitude},${longitude}`;
    window.open(googleMapsLink, "_blank");
  };

  return (
    <div className="viewDetails">
      <div className="sticky">
        <Sidebar />
      </div>
      <div className="viewDetailsContainer">
        <div className="viewDetailsImg bounceEffect">
          <img
            src="https://img.freepik.com/free-vector/business-team-working-project-project-management-business-analysis-planning-brainstorming-research-consulting-motivation-concept-vector-isolated-illustration_335657-2244.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais"
            alt="viewDImage"
          />
        </div>
        {/* Date Pickers */}
        <div className="dateFilterContainer">
          <TextField
            className="input1"
            id="startDate"
            label="Start Date"
            type="date"
            value={startDate ? startDate.toISOString().split("T")[0] : ""}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="endDate"
            label="End Date"
            type="date"
            value={endDate ? endDate.toISOString().split("T")[0] : ""}
            onChange={handleEndDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <IconButton color="primary" onClick={filterData}>
            <CalendarTodayIcon />
          </IconButton>
        </div>

        {/* Search Bar */}
        <div className="searchBarContainer">
          <TextField
            className="input1"
            id="search"
            label="Search by ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton color="primary" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </div>
        <button className="pdfButton" onClick={generatePDF}>
          <div className="mr-2">
            <PictureAsPdfIcon />
          </div>
          Generate PDF
        </button>

        <button
          className="csvButton"
          onClick={downloadCSV}
          style={{ borderRadius: "5px" }}
        >
          <div className="mr-2">
            <CloudDownloadIcon />
          </div>
          Downlaod CSV
        </button>

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
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((employee) => (
                <TableRow key={employee._id}>
                  {columns.map((column) => (
                    <TableCell key={column.name}>
                      {column.name === "time" ? (
                        new Date(employee[column.name]).toLocaleString(
                          "en-IN",
                          {
                            dateStyle: "short",
                            timeStyle: "short",
                          }
                        )
                      ) : column.name === "map" ? (
                        <IconButton
                          color="primary"
                          onClick={() =>
                            openGoogleMaps(
                              employee.latitude,
                              employee.longitude
                            )
                          }
                        >
                          <RoomIcon />
                        </IconButton>
                      ) : (
                        employee[column.name]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* Table Pagination */}
        <TablePagination
          rowsPerPageOptions={[100, 500, 1000]}
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
