import { useState } from 'react';

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
    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={deCrementBtnClickHandler}>-</button>
            <button onClick={resetBtnClickHandler}>0</button>
            <button onClick={incrementBtnClickHandler}>+</button>
        </>
    );
}
