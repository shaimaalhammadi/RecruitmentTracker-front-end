import logo from './logo.svg';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Sidebar from './components/SideBar';
import Dashboard from './components/Dashboard';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";


const data = [ 
  { name: "Family cases sector", students: 200 },
  { name: " counselling and integration section", students: 700 },
  { name: "shelter & care services sector", students: 200 },
  { name: "Director General", students: 1000 },
  { name: "Support services sector", students: 1000 },

];


function App() {
  return (
    
<div className="App">

  <Router>
 
  <Sidebar 
  />
  </Router>
  <Dashboard />
  <br></br>
  <br></br>

  <h6> Numbers Interviews per sector</h6>
  <BarChart width={600} height={200} data={data}>
          <Bar dataKey="students" fill="#6495ed" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
      </BarChart>
  
 </div>
)
 }
 

export default App;
 
