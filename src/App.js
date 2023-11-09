import React from 'react'
import Login from './pages/login/Login';
import New from './pages/new/New';
import View from './pages/view/View';

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
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

