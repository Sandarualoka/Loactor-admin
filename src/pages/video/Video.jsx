import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./video.scss"
const Video = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);

      fetch('http://your-backend-url/upload', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          console.log('Video uploaded:', data);
          // Handle success, update UI or show a success message
        })
        .catch(error => {
          console.error('Error uploading video:', error);
          // Handle error, show error message to the admin
        });
    } else {
      // Show a message to select a file
      console.log('Please select a file.');
    }
  };

  return (

        <div className="video">
          <Sidebar/>
          <div className="videoContainer">
            <Navbar/>
            <div className="uploader">
              <img src='https://imgs.search.brave.com/nx29WseBnFrkyDZvoFSWqcQY_zvXDr1AZ0uIqNrNnXM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NjkyODgyNS92ZWN0/b3IvdmlkZW8tY29u/ZmVyZW5jZS1pbnRl/cm5ldC1tZWV0aW5n/LWFuZC1saXZlLXZp/ZGVvLWNoYXQtaXNv/bWV0cmljLXZlY3Rv/ci1pbGx1c3RyYXRp/b24tYnVzaW5lc3Mu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXVjRHJpR0tJcWct/NUNnQm44SVZ1QVEz/X1dlaWNMRW9ER0Vy/MUFIWXQ4VjA9' alt='video_pic' className='video-pic'/>
              <p className='header'>Video Conference Uploader</p>
              
              <div className="uploadContainer">
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload Video</button>
              </div>
            </div>
          </div>
        </div>
    
  );
};

export default Video;

