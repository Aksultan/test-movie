import './Movies.css';
import Movie from './Movie/Movie'
import { getMovie } from '../../api';
import { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';


function Movies(){
    let [movies, setMovies] = useState([]);
    let [totalPages, setTotalPages] = useState(0);
    let [lastSearch, setLastSearch] = useState('');
    let [currentPage, setCurrentPage] = useState(1)
    let handleSubmit = (e) => {
        e.preventDefault()
        getMovie(e.target[0].value).then(data=>{
            setMovies(data.Search)
            //very complex math
            setTotalPages(Number(Math.floor(data.totalResults/10)+(data.totalResults%10&&1)))
            setCurrentPage(1)
            setLastSearch(e.target[0].value)
        })
        
    }
    let handleChange = (page) => {
        getMovie(lastSearch, page).then(data=>setMovies(data.Search))
        setCurrentPage(page)
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
            {totalPages>0&&<Pagination count={totalPages} page={currentPage} onChange={(e, page)=>handleChange(page)} classes={{root: 'pagination'}} size="large"/>}

        </>
    );
}

export default Movies;