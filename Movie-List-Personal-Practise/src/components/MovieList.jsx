import MovieListItem from './MovieListItem';

export default function MovieList(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <ul>
                <MovieListItem url={'https://www.imdb.com/title/tt0133093/'}>
                    {props.movies[0]}
                </MovieListItem>
                <MovieListItem url={'https://www.imdb.com/title/tt0770828/'}>
                    {props.movies[1]}
                </MovieListItem>
                <MovieListItem title={props.movies[2]}></MovieListItem>
                <MovieListItem title={props.movies[3]}></MovieListItem>
                {/* <li>{props.movies[1]}</li>
                <li>{props.movies[2]}</li>
                <li>{props.movies[3]}</li> */}
                {/* <li>{props.myName}</li> */}
            </ul>
        </>
    );
}
