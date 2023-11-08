import React from 'react'
import Login from './pages/login/Login';
import New from './pages/new/New';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/">
          {/* <Route path='video' element={<Video/>} /> */}
          {/* <Route path='/' element={<Login/>} /> */} 
           
           
           {/* <Route path="users">
           
              <Route index element={<List />} />
              <Route path="video" element={<Video/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
           </Route> */}

           {/* <Route path='products'>

              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Product" />} />
           </Route>

          </Route>
        </Routes> */}

         <Routes>
           {/* <Route path='/' element={<Login/>} />  */}
          
           <Route path='/' element={<Login/>} />

           
           
           
           <Route path='/new' element={<New/>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;