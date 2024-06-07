import { useEffect, useRef } from "react";
import { useTimeStore } from "./store";

const Stopwatch = () => {
  const { isRunning, elapsedTime, start, stop, reset, setElapsedTime } =
    useTimeStore();

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning, setElapsedTime]);

  const startClock = () => {
    start();
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="useful-app">
      <h2>STOPWATCH</h2>
      <span className="stopwatch">{formatTime()}</span>
      <div className="stopwatch-controls">
        <button onClick={startClock}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
