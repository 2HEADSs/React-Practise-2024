import { useEffect, useRef, useState } from 'react';

export default function RefHook() {
    const [counter, setCounter] = useState(0);
    const initialRenderRef = useRef(true);

    useEffect(() => {
        if (initialRenderRef.current) {
            console.log('Initialii render');
            initialRenderRef.current = false;
        } else {
            console.log('Update only');
        }
    }, [counter]);
    return (
        <>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter((c) => c + 1)}>+</button>
        </>
    );
}
