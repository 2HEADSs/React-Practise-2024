import { useState } from 'react';
import KillCounter from './KillCounter';

export default function Timer() {
    const [count, setCount] = useState(0);

    const deCrementBtnClickHandler = () => {
        setCount(count - 1);
    };
    const incrementBtnClickHandler = () => {
        setCount(count + 1);
    };
    const resetBtnClickHandler = () => {
        setCount(0);
    };
    let text;
    let color = 'green';
    if (count >= 0) {
        text = `Positive ${count}`;
    } else {
        text = `Negative ${count}`;
        color = 'red';
    }
    const enableIncrement = count < 10;
    return (
        <>
            <h2>Counter</h2>
            <KillCounter count={count} />
            <p
                style={{ color }}
                className={count < 0 ? 'negative-text' : 'positive-text'}
            >
                {text}
            </p>

            <button onClick={deCrementBtnClickHandler}>-</button>
            <button onClick={resetBtnClickHandler}>0</button>
            {enableIncrement && (
                <button onClick={incrementBtnClickHandler}>+</button>
            )} 
        </>
    );
}
