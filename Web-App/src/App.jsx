import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Home />
                {/* <Login /> */}
            </main>
        </div>
    );
}

export default App;
