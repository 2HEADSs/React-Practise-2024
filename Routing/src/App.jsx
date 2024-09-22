import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Pricing from './components/Pricing';
import About from './components/About';
import Articles from './components/Articles';
import ArticleDetails from './components/ArticleDetails';
import NotFound from './components/NotFound';

function App() {
    return (
        <div className="bg-white">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/articles" element={<Articles />} />
                <Route
                    path="/articles/:articleId"
                    element={<ArticleDetails />}
                />
                {/* ALL WRONG PATHS */}
                <Route path="/not-found" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
