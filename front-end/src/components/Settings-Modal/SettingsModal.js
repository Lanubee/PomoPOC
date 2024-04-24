import React, { useState, useEffect } from 'react';
import './SettingsModal.css'

function SettingsModal({settingsBoolean}) {

  return (
    <div className="modalBackground">
      <div className='modalContainer'>
        <h1>Settings</h1>
        <div className='buttonPosition'>
          <button onClick={() => settingsBoolean(false)} id='closeButton'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal