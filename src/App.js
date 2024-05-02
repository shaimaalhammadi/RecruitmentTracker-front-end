import logo from './logo.svg';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Sidebar from './components/SideBar';
import Dashboard from './components/Dashboard';

import FCALogo from "src/FCALogo.png";

const imagesList = [
  {
    id: 1,
    src: FCALogo,
    alt: "Image 1" ,
  },
]

function App() {
  return (
<div className="App">

  <Router>
 
  <Sidebar 
  />
   {imagesList.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} style={{height:80, width:180}} />
      ))}
  </Router>
  <Dashboard />
  
 </div>
)
 }
 

export default App;
 
