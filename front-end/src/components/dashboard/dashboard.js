import React, {useState} from 'react';
import "./dashboard.css";
import SettingsModal from '../Settings-Modal/SettingsModal';

function Dashboard({settingsBool}) {
  return (
    <div className="dashboard">
        <h2>NYASHBOARD</h2>
        <button style={{marginLeft: 'auto'}}>Login</button>
        <button style={{marginLeft: '0.5rem'}} onClick={() => settingsBool(true)}>Settings</button>
    </div>
  )
}

export default Dashboard