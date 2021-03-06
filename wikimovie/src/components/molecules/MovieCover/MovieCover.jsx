import React from 'react'
import Text from '../../atoms/Text/Text'
import Image from '../../atoms/Image/Image';
import './MovieCover.css'
import Title from '../../atoms/Title/Title';
import MovieRepository from '../../../data/MovieRepository';
const MovieCover = (props) => (
    <div className="container-fluid btn" onClick={props.openDetailAction}>
        <div className="row">
            <div className="col">
                <div className="imagebox">
                <Image
                    style={`image-cover container-fluid`}
                    image={props.movie ? MovieRepository.serveBackdropImage(props.movie.backdrop_path) : null}/>
                <div className="imagebox-desc">
                    <Title>{props.movie ? props.movie.title : null}</Title>
                    <Text>{props.movie ? props.movie.overview : null}</Text>
                </div>
                
                </div>
            </div>
        </div>
        
        
    </div>
);

export default MovieCover;