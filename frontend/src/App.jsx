/* eslint-disable no-unused-vars */

import './App.css';
import React from 'react';
import {CreateProduct, Home, Login,Signup} from "./Routes/Routes"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/createProduct' element={<CreateProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
