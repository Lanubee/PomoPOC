import React, { useState, useEffect } from 'react';

function Timer() {
  const [timer, setTimer] = useState('00:00');
  const [inputValueSeconds, setInputValueSeconds] = useState('');
  const [inputValueMinutes, setInputValueMinutes] = useState('');

  /**
   * Updates the timer to go down by 1 per second
   */
  useEffect(() => {
    let timerId;
    if (timer !== '00:00') 
    {
      timerId = setTimeout(() => 
      {
      const timerParts = timer.split(':');
      const minutes = parseInt(timerParts[0]);
      const seconds = parseInt(timerParts[1]);
      let newMinutes = minutes;
      let newSeconds = seconds - 1;
      if (newSeconds < 0)
      {
        newMinutes -= 1;
        newSeconds = 59;
      }
      const minutesString = String(newMinutes).padStart(2, '0');
      const secondsString = String(newSeconds).padStart(2, '0');
      setTimer(minutesString + ':' + secondsString);
    }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [timer]);

  /**
   * Converts the input from user to an integer
   * Checks if input is a number and larger than 0, sets timer if passes
   */
  const handleSetTimer = () => {
    const seconds = parseInt(inputValueSeconds, 10);
    const minutes = parseInt(inputValueMinutes, 10);
    if (!isNaN(minutes) && !isNaN(seconds) && minutes >= 0 && seconds >= 0) {
      const minutesString = String(inputValueMinutes).padStart(2, '0')
      const secondsString = String(inputValueSeconds).padStart(2, '0')
      setTimer(minutesString + ':' + secondsString);
    } else {
      console.error('Invalid input for timer');
    }
  };

  /**
   * Sets the inputValueMinutes from minutes input box
   * @param {*} event 
   */
  const handleInputChangeMinutes = (event) => {
    setInputValueMinutes(event.target.value);
  }

  /**
   * Sets the inputValueSeconds from the seconds input box 
   * @param {*} event
   */
  const handleInputChangeSeconds = (event) => {
    setInputValueSeconds(event.target.value);
  };

  /**
   * Returns timer division with setter functions
   * @returns input box, submission button, timer views
   * 
   */
    return (
    <div className="timerbox">
      <div className="timer">{timer}</div>
        <div className="timer-input">
          <label htmlFor='timeInput'>Set Timer:</label>
          <input
            type="number"
            id='timeInputMinutes'
            value={inputValueMinutes}
            onChange={handleInputChangeMinutes}
          />
          <input
            type="number"
            id='timeInputSeconds'
            value={inputValueSeconds}
            onChange={handleInputChangeSeconds}
          />
          <button onClick={handleSetTimer}>Submit</button>
        </div>
    </div>
  );
}

export default Timer;