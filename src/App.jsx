import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <>
      <h1>Stop Watch</h1>
      <div>{formatTime(time)}</div>
      <div>
        {running ? <button onClick={() => setRunning(false)}>Stop</button>:<button onClick={() => setRunning(true)}>Start</button>}
        
        <button onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
      </div>
    </>
  );
}

export default App;
