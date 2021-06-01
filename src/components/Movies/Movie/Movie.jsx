import "./Movie.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function Movie({movie, ...props}){
    return (
        <Card variant="outlined" classes={{
            root: "card"
        }}>
            <CardActionArea classes={{root:'action-card'}}>
                <CardMedia
                image={movie.Poster}
                title={movie.Title}
                classes={{root:"card-image"}}
                />
                <CardContent classes={{root: 'card-content'}}>
                    <Typography gutterBottom align="center" variant="h5" component="h2">
                        {movie.Title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Movie;