import React from 'react'
import Image from '../../atoms/Image/Image';
import './MovieCard.css'
import MovieRepository from '../../../data/MovieRepository';
const MovieCard = (props) => (
    <div className="col-3 movie-card">
        <Image style={`card-img-top movie-img`} image={props.movie ? MovieRepository.servePosterImage(props.movie.poster_path) : null}/>
    </div>
);

export default MovieCard;