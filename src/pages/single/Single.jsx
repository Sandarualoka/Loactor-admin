import React from 'react'
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"; 
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="userPro" className="itemImg" />
              <div className="details">
              <h1 className="itemTitle">Sandaru De Silva</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">sandarualoka99@gmail.com</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">070-3405699</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Test,test10 ,test</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Srilanka</span>
              </div>
             
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title = "User spending (Last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single