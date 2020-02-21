import React from 'react'
import Movie from '../../molecules/Movie/Movie'
import Button from '../../atoms/Button/Button';
import './MovieFeed.css';
const MovieFeed = (props) => (
    <div className="container movie-feed">
        <div className="row">
            <h1>{props.title ? props.title : 'Title'}</h1>
        </div>
        <div className="row">
        {
                props.movies.length > 0 ? 
                props.movies.map((movie) => {
                    return <Movie movie={movie} type='card' key={movie.id}></Movie>})
                :
                <h1>No hay resultados</h1>
            }
        </div>
        <div className="row load-more-button">
            <div className="col">
                <Button style={`btn btn-outline-success my-2 my-sm-0 load-more-button`}>VER MÁS</Button>
            </div>
        </div>
    </div>
);

export default MovieFeed