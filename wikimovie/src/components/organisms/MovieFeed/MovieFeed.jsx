import React from 'react'
import Movie from '../../molecules/Movie/Movie'
import Button from '../../atoms/Button/Button';
import './MovieFeed.css';
const MovieFeed = (props) => (
    <div className="container movie-feed">
        <div className="row">
        <h1>{props.title ? props.title : 'Title'} 
            {props.movies.length >0 && ' ('+props.movies.length + '/' + props.total + ')'}</h1>
        </div>
        <div className="row">
        {
                props.movies.length > 0 ? 
                props.movies.map((movie) => {
                    return <Movie movie={movie} type='card' key={movie.id} openDetailAction={props.openDetailAction}></Movie>})
                :
                <h1>No hay resultados</h1>
            }
        </div>
        <div className="row load-more-button">
            <div className="col">
                {
                    props.movies.length > 0 && <Button 
                        style={`btn btn-outline-success my-2 my-sm-0 load-more-button`} 
                        action={props.loadMoreAction}>VER MÁS</Button>
                }
                
            </div>
        </div>
    </div>
);

export default MovieFeed