import logo from './logo.svg';
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
          name: data.nameame,
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          TIME TO PRINT THIS MFER
        </p>
        <p>{data.programming}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
