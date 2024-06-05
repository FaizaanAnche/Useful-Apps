import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10)
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = () => {

        let hours = Math.floor(elapsedTime /  (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime/1000 % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 /10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
 
    return (
        <div className="useful-app">
            <h2>STOPWATCH</h2>
            <span className="stopwatch">{formatTime()}</span>
            <div className="stopwatch-controls">
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch;