import React from 'react';
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
        <h2>NYASHBOARD</h2>
        <button style={{marginLeft: 'auto'}}>Login</button>
        <button style={{marginLeft: '0.5rem'}}>Settings</button>
    </div>
  )
}

export default Dashboard