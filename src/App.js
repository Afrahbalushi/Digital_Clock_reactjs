import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const boxStyleObj = { 
    height:300, 
    width:1100, 
    marginTop:100,
    fontSize: 200
  }
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalTime);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
        <h1 className='App'>Digital Clock</h1>
        <button type="button" className="btn btn-outline-primary" style={boxStyleObj}>{formattedTime}</button>
        </div>
      </div>
    </div>
   
  );
}

export default App;
