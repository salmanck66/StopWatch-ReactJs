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
    <div className="stopwatch-container">
      <h1 className="stopwatch-heading">Stop Watch</h1>
      <div className="stopwatch-display">{formatTime(time)}</div>
      <div className="stopwatch-controls">
        {running ? (
          <button onClick={() => setRunning(false)} className="stop-button">
            Stop
          </button>
        ) : (
          <button onClick={() => setRunning(true)} className="start-button">
            Start
          </button>
        )}
        <button onClick={() => { setTime(0); setRunning(false); }} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
