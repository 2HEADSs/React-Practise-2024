import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import FancyTimer from './components/FancyTimer';

function App() {
    const [showTimer, setShowTimer] = useState(true);

    return (
        <>
            <Timer />
            {showTimer && (
                <>
                    <FancyTimer />
                    <button onClick={() => setShowTimer(false)}>
                        Turn Off
                    </button>
                </>
            )}
        </>
    );
}

export default App;
