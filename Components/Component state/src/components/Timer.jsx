import { useState } from 'react';

export default function Timer() {
    const [time, setTimer] = useState(0);

    setTimeout(() => {
        // setTimer(count + 1);
        setTimer((oldState) => (oldState += 1));
    }, 1000);
    return (
        <>
            <h2>Timer</h2>
            <p>{time}</p>
        </>
    );
}
