import { useState, useEffect } from 'react';
import Effect from './Effect';

export default function Timer() {
    const [isManual, setIsManual] = useState(false);
    const [time, setTime] = useState(() => {
        const currentSeconds = new Date().getSeconds();

        return currentSeconds;
    });

    useEffect(() => {
        if (!isManual) {
            setTimeout(() => {
                setTime((prevTime) => prevTime + 1);
                setIsManual(false);
            }, 1000);
        }
    }, [time, isManual]);

    const addSecondHandler = () => {
        setIsManual(true);
        setTime((prevTime) => prevTime + 10);
    };

    return (
        <>
            <h1>Timer</h1>
            <p>{time}</p>
            <button onClick={addSecondHandler}>Add seconds </button>
            {time < 60 && <Effect />}
        </>
    );
}
