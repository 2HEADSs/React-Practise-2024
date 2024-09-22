import { useEffect, useState } from 'react';
import styles from './FancyTimer.module.css';
export default function FancyTimer() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('setInterval');

            setTime((oldTime) => oldTime + 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const addSecondHandler = () => {
        setTime((prevTime) => prevTime + 10);
    };

    return (
        <>
            <h1 className={styles['fancy-timer']}>Fancy Timer</h1>
            <p>{time}</p>
            <button onClick={addSecondHandler}>Add seconds </button>
        </>
    );
}
