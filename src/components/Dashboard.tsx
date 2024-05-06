import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../App.css";


export const getDashboardAPI = async () => {
  try {
    const BASE_URL = 'http://localhost:5100/api';
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5Njg3YWJlOGM5YjQ5YWQ4MjhmNWM5IiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZGZjYS5nb3YuYWUifSwiaWF0IjoxNzE0OTczOTUxLCJleHAiOjE3MTUwMDk5NTF9.XYNaWn9TsKjP64tKjb-IR97QE875Zhsga2gxNO_qh-U';
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'x-auth-token': `${token}` },
    }
    const response = await axios.get(`${BASE_URL}/dashboard`, requestOptions)
    return response
  } catch (error) {
    return error
  }
}

function Dashboard() {
const [data, setData] = useState(null);

useEffect(() => {
  async function fetchData() {
    const result = await getDashboardAPI();
    if (result.status === 200) {
      setData(result.data);
    } else {
      console.error(result.statusText);
    }
  }
  fetchData();
}, []);

return (
  <div>

    {data && (
      <div>
         <p className='columnStyle'> Total Applicants </p>
         <p className='columnStyle'> {data.total_applicant} </p>
         <p className='columnStyle'> Shortlisted Candidate </p>
         <p className='columnStyle'> {data.shortlisted_candidate}</p>
         <p className='columnStyle'> Hired Candidate </p>
         <p className='columnStyle'> {data.hired_candidate}</p>
         <p className='columnStyle'> Rejected Candidate </p>
         <p className='columnStyle'> {data.rejected_candidate}</p>
         <p className='columnStyle'> Resigned Employee </p>
         <p className='columnStyle'> {data.resigned_candidate}</p>
         <p className='columnStyle'> On Boarding Candidates </p>
         <p className='columnStyle'>{data.on_boarding_candidates}</p>
         <p className='columnStyle'> In Process Candidate </p>
         <p className='columnStyle'>{data.in_process_candidates}</p>

      </div>
    )}
    {!data && <div>Loading...</div>}
  </div>
);
}
export default Dashboard;
