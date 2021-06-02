import "./About.css";
import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieById } from '../../api';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function About(){
    const query = useQuery();
    let [movie, setMovie] = useState({})
    useEffect(() =>{
        getMovieById(query.get("imdbID")).then(data=>{
            setMovie({...data})
            console.log(data)
        })
    }, [])
    return (
        <Container>
            <div className="about">
            {movie&&(
                <Grid container spacing={5} >
                    <Grid item xs={5} sm={6}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <Typography variant="h4" component="h4">
                            {movie.Title}
                        </Typography>
                        <div className="badge-container">
                            {movie.Genre&&movie.Genre.split(",").map((genre, index)=><Chip key={index} label={genre} color="primary"/>)}
                        </div>
                        <div className="badge-container">
                            {movie.Ratings&&movie.Ratings.map((rating, index)=><Chip key={index} label={`${rating.Source} : ${rating.Value}`} color="secondary"/>)}
                        </div>
                        <Typography variant="h5">
                            <strong>Year :</strong> {movie.Year}
                        </Typography>
                        <Typography variant="h5">
                            <strong>Production :</strong> {movie.Production}
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={6}> 
                        <Typography variant="h3" component="h3">
                            Plot
                        </Typography>
                        <Typography paragraph={true}>
                            {movie.Plot}
                        </Typography>
                        <Grid container spacing={5}>
                            <Grid item xs={6}>
                                <Typography variant="h5">
                                    <strong>Director:</strong> {movie.Director}
                                </Typography>   
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h5">
                                    <strong>Actors:</strong> {movie.Actors}
                                </Typography>   
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h5">
                                    <strong>Writer:</strong> {movie.Writer}
                                </Typography>   
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
            </div>
        </Container>
    )
}

export default About;