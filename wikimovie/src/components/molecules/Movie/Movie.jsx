import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
import MovieCover from '../MovieCover/MovieCover';
import movie from './movie.mock';
import MovieDetail from '../MovieDetail/MovieDetail';
const Movie = (props) => {
    const isCard = () => {
        return props.type === 'card';
    }

    const isCover = () => {
        return props.type === 'cover';
    }

    const isDetail = () => {
        return props.type === 'detail'
    }

    

    return (
        <React.Fragment >
            {
                isCard() && 
                    <MovieCard 
                        openDetailAction={e => props.openDetailAction(e, props.movie.id)} 
                        movie={props.movie ? props.movie : movie}></MovieCard>
            }
            {
                isCover() && 
                    <MovieCover 
                        openDetailAction={e => props.openDetailAction(e, props.movie.id)} 
                        movie={props.movie ? props.movie : movie}></MovieCover>
            }
            {
                isDetail() && <MovieDetail id={movie.id}></MovieDetail>
            }
        </React.Fragment>
    )
}

export default Movie;