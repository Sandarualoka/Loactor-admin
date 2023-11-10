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
        <h2 className='bulkHeader'>Bulk Employee Upload</h2>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Bulk;
