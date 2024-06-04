import { useEffect, useState } from "react";

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervalId);
        }
    },[]);

    const formatTime = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    const padZero = (number) => {
        return (number<10 ? "0":"") + number;
    }

    return (
        <div className="useful-app">
            <h2>DIGITAL CLOCK</h2>
            <span className="clock">{formatTime()}</span>
        </div>
    )
}

export default DigitalClock;