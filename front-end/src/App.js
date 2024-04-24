import React, { useState, useEffect} from 'react';
import "./style.css";
// import components
import Timer from "./components/timer";
import Dashboard from "./components/dashboard/dashboard";
import SettingsModal from './components/Settings-Modal/SettingsModal';

function App() {
  const [openSettings, setOpenSettings] = useState(false)

  return (
    <div className="container">
      <Dashboard settingsBool={setOpenSettings}/>
      <Timer />
      {openSettings && <SettingsModal settingsBoolean={setOpenSettings}/>}

    </div>
  );
}

export default App;
