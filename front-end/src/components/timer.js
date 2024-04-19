import React, { useState, useEffect } from 'react';

function Timer() {
  const [timer, setTimer] = useState('00:00');
  const [inputValue, setInputValue] = useState('');

  /**
   * Updates the timer to go down by 1 per second
   */
  useEffect(() => {
    let timerId;
    if (timer !== null && timer > 0) {
      timerId = setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      setTimer('00:00');
    }
    return () => clearTimeout(timerId);
  }, [timer]);

  /**
   * Converts the input from user to an integer
   * Checks if input is a number and larger than 0, sets timer if passes
   */
  const handleSetTimer = () => {
    const timeInputValue = parseInt(inputValue, 10);
    if (!isNaN(timeInputValue) && timeInputValue > 0) {
      setTimer(timeInputValue);
    } else {
      console.error('Invalid input for timer');
    }
  };

  /**
   * Sets the inputValue from the input box 
   */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
            id='timeInput'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSetTimer}>Submit</button>
        </div>
    </div>
  );
}

export default Timer;