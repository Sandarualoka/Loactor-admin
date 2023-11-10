import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';
import './bulk.scss';

const Bulk = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);

        // Send the CSV file to your backend
        const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Handle the response from the backend as needed
        console.log('Backend Response:', response.data);
      } else {
        console.error('No file selected');
      }
    } catch (error) {
      console.error('Error uploading CSV file:', error);
    }
  };

  return (
    <div className="bulk">
  <Sidebar />
  <div className="bulkContainer">
    <div className="center-content">
      <img
        className='logoEmployee'
        src='https://imgs.search.brave.com/LBMkd1l_eB7YGFDCkxZo4ymPkHbMcY0RLhi6A7i9G8Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NTI4NjE1My92ZWN0/b3IvbmV3LXRlYW0t/bWVtYmVycy1hYnN0/cmFjdC1jb25jZXB0/LXZlY3Rvci1pbGx1/c3RyYXRpb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWdB/YWJQelJtcFo4RUFo/MnZ0dUhRSkV1cDZC/MU9aaVFBaXRVRldH/U1dlQTg9'
        alt='logoEmployee'
      />
      <h2 className='bulkHeader'>Bulk Employee Upload</h2>
      <div className="button-container">
        <input className='browseBtn' type="file" accept=".csv" onChange={handleFileChange} />
        
        
            <div class="wrap1">
                <button class="button" onClick={handleSubmit}>Submit</button>
            </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default Bulk;
