import './App.css';
import MovieList from './components/MovieList';

function App() {
    const movies = [
        'The Matrix',
        'Man of Steel',
        'Lord of the Rings',
        'Case for Christ',
    ];
    return <MovieList movies={movies} title="Movie List" />;
    {
        /* <MovieList movies={movies} myName={"Pavel"} /> */
    }
}

export default App;
