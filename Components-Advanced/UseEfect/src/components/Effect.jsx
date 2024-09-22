import { useEffect, useState } from 'react';

export default function Effect() {
    const [count, setCount] = useState(0);
    const [decaCount, setDecaCount] = useState(0);

    useEffect(() => {
        console.log('Initial render/ Mounting');
    }, []);

    useEffect(() => {
        console.log('Update counter');
    }, [count]);

    useEffect(() => {
        console.log('Update deca count');
    }, [decaCount]);

    useEffect(() => {
        return () => {
            console.log('Component unmount');
        };
    }, []);

    const onClick = () => {
        setCount((prevCount) => prevCount + 1);

        if (count % 10 === 0 && count != 0) {
            setDecaCount((prevValue) => prevValue + 1);
        }
    };

    return (
        <>
            <h1>Effect</h1>
            <p>{count}</p>
            <p>{decaCount}</p>
            <button onClick={onClick}>+</button>
        </>
    );
}
