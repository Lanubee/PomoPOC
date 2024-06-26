import React, { useState, useEffect} from 'react';
import "./style.css";
// import components
import Timer from "./components/timer";
import Dashboard from "./components/dashboard";

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
    <div className="container">
      <Dashboard />
      <Timer />
    </div>
  );
}

export default App;
