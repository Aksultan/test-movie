import './Movies.css';
import Movie from './Movie/Movie'
import { getMovie } from '../../api';
import { useState } from 'react';

function Movies(){
    let [movies, setMovies] = useState([]);
    let handleSubmit = (e) =>{
        e.preventDefault()
        getMovie(e.target[0].value).then(data=>setMovies(data))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <button type="submit">Search</button>
            </form>
            <div className="cards-container">
                {
                    // console.log(movies)
                    movies&&movies.map(movie=><Movie key={movie.imdbID} movie={movie}/>)
                }
            </div>

        </>
    );
}

export default Movies;