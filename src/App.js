import React from 'react'
import Login from './pages/login/Login';
import New from './pages/new/New';
import View from './pages/view/View';
import Bulk from './pages/bulk/Bulk';
import ViewDetails from './pages/viewDetails/ViewDetails';
import Req_Leave from './pages/req-leave/Req_Leave';
import Leave from './pages/leave/Leave';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        

         <Routes>
          
           <Route path='/' element={<Login/>} />
           <Route path='/new' element={<New/>} />
           <Route path='/view' element={<View/>}/>
           <Route path='/bulk' element={<Bulk/>} />
           <Route path='/viewDetails' element={<ViewDetails/>} />
           <Route path='/req_leave' element={<Req_Leave/>} />
           <Route path='/leave' element={<Leave/>} />


         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

