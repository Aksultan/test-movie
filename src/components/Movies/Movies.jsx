import './Movies.css';
import Movie from './Movie/Movie'
import { getMovie } from '../../api';
import { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';


function Movies(){
    let [movies, setMovies] = useState([]);
    let [currentPage, setCurrentPage] = useState(0);
    let [lastSearch, setLastSearch] = useState('')
    let handleSubmit = (e) => {
        e.preventDefault()
        getMovie(e.target[0].value).then(data=>{
            setMovies(data.Search)
            //very complex math
            setCurrentPage(Number(Math.floor(data.totalResults/10)+(data.totalResults%10&&1)))
            setLastSearch(e.target[0].value)
        })
        
    }
    let handleChange = (page) => {
        getMovie(lastSearch, page).then(data=>setMovies(data.Search))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <button type="submit">Search</button>
            </form>
            <div className="cards-container">
                {movies&&movies.map((movie, index)=><Movie key={index} movie={movie}/>)}
            </div>
            {currentPage>0&&<Pagination count={currentPage} onChange={(e, page)=>handleChange(page)} classes={{root: 'pagination'}} size="large"/>}

        </>
    );
}

export default Movies;