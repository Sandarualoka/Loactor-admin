import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Papa from "papaparse";
import "./bulk.scss";

const Bulk = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileSubmit = async () => {
    try {
      if (selectedFile) {
        // Parse the CSV file
        Papa.parse(selectedFile, {
          complete: async (result) => {
            // Extract the data from the parsed result
            const csvData = result.data.filter(
              (entry) => entry.employeeid && entry.password
            );
            // Format the data to match the desired structure
            const formattedData = csvData.map((entry) => ({
              employeeid: entry.employeeid,
              password: entry.password,
            }));
            console.log("Formatted Data:", formattedData);

            // Retrieve the token from local storage
            const token = localStorage.getItem("accessToken");
            console.log("Token", token);

            // Check if the token is available
            if (!token) {
              console.error("Token not available");
              return;
            }

            try {
              // Send the formatted data to your backend with the auth-token in the headers using fetch
              const response = await fetch(
                "https://backattendance.tfdatamaster.com/api/users/register",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                  },
                  body: JSON.stringify(formattedData),
                }
              );

              // Handle the response from the backend as needed
              if (response.ok) {
                const responseData = await response.json();
                console.log("Backend Response:", responseData);

                // Display success message by updating state
                setShowSuccessMessage(true);

                // Show a browser alert for successful submission
                window.alert("CSV file submitted successfully!");

                // Reload the page after the alert popup
                window.location.reload();
              } else {
                console.error("Error:", response.statusText);
              }
            } catch (error) {
              console.error("Error:", error.message);
            }
          },
          header: true, // Treat the first row as headers
        });
      } else {
        console.error("No file selected");
      }
    } catch (error) {
      console.error("Error processing CSV file:", error);
    }
  };

  return (
    <div className="bulk">
      <div className="sticky top-0 z-50">
        <Sidebar />
      </div>
      <div className="bulkContainer">
        <div className="center-content">
          <img
            className="logoEmployee"
            src="https://imgs.search.brave.com/LBMkd1l_eB7YGFDCkxZo4ymPkHbMcY0RLhi6A7i9G8Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NTI4NjE1My92ZWN0/b3IvbmV3LXRlYW0t/bWVtYmVycy1hYnN0/cmFjdC1jb25jZXB0/LXZlY3Rvci1pbGx1/c3RyYXRpb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWdB/YWJQelJtcFo4RUFo/MnZ0dUhRSkV1cDZC/MU9aaVFBaXRVRldH/U1dlQTg9"
            alt="logoEmployee"
          />
          <h2 className="bulkHeader">Bulk Employee Upload</h2>
          <div className="button-container">
            <input
              className="browseBtn"
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              style={{
                // Add your styles here
                padding: "10px",
                backgroundColor: "rgba(53, 15, 245, 0.985)",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />

            <div className="wrap1">
              <button className="button" onClick={handleFileSubmit}>
                Submit
              </button>
            </div>
          </div>

          {/* Display success message based on state */}
          {showSuccessMessage && (
            <div className="success-message">
              CSV file uploaded successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bulk;
