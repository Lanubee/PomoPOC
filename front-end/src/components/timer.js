import React, { useState, useEffect } from 'react';
import PomodoroSound from '../Assets/PomodoroSound.mp3';

function Timer() {
  const [timer, setTimer] = useState('00:00');
  const [inputValueSeconds, setInputValueSeconds] = useState('');
  const [inputValueMinutes, setInputValueMinutes] = useState('');
  const [timerStarted, setTimerStarted] = useState(false);

  /**
   * Plays the alarm sound
   */
  function endSound(){
    new Audio(PomodoroSound).play()
  }

  /**
   * Updates the timer to go down by 1 per second and plays alarm when timer is 00:00
   */
  useEffect(() => {
    let intervalID;
    if (timerStarted && timer !== '00:00') {
      let minutesString;
      let secondsString;
      const endTime = new Date().getTime() + (parseInt(timer.split(':')[0]) * 60 * 1000) + (parseInt(timer.split(':')[1]) * 1000);
      intervalID = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
        if (timeLeft > 0) {
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.round((timeLeft % (1000 * 60)) / 1000);
          if (seconds === 60){
            minutesString = String(minutes + 1).padStart(2, '0');
            secondsString = String(0).padStart(2, '0');

          }
          else{
            minutesString = String(minutes).padStart(2, '0');
            secondsString = String(seconds).padStart(2, '0');
          }
          setTimer(`${minutesString}:${secondsString}`);
        } else {
          clearInterval(intervalID);
          endSound();
          setTimerStarted(false);
          setTimer('00:00');
        }
      }, 1000);
    }
    document.title = timer;
    return () => clearInterval(intervalID);
  }, [timer, timerStarted]);

  

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
      setTimerStarted(true);
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