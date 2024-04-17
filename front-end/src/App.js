import './App.css';
import React, { useState, useEffect} from 'react';

function App() {
  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });

  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
        setdata({
          name: data.name,
          age: data.age,
          date: data.date,
          programming: data.programming
        });
      })
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.programming}</p>
        <p>Time is currently {data.date}</p>
      </header>
    </div>
  );
}

export default App;
