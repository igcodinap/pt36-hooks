import { useState, useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log(time, '<----time')
            // setTime(time + 1);
            setTime((previousTime) => previousTime + 1)
        }, 1000)
    }, [])


    return(
        <div className="container">
            <h1>Timer</h1>
            <p>{time}</p>
        </div>
    )
}