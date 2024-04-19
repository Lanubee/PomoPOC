import React, {useState, useEffect} from 'react'


function Timer() {
  const date = new Date();
  const[Timer, setTimer] = useState(null);

  // function setTimer(addedTime){
  //   setTimer(addedTime);
  // }

  useEffect(() => {
    Timer > 0 && setTimeout(() => setTimer(Timer - 1), 1000);
  }, [Timer]);
  
  return (
    <div className="timer">
      <h1>Hello.</h1>
      <div>Timer: {Timer}</div> 
      </div>
  )
}

export default Timer;