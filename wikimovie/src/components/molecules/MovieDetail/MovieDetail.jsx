import React from 'react'
import Text from '../../atoms/Text/Text'
import Image from '../../atoms/Image/Image';
import './MovieDetail.css'
import Title from '../../atoms/Title/Title';
import MovieRepository from '../../../data/MovieRepository';
const MovieDetail = (props) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <div className="imagebox">
                <Image
                    style={`image-cover`}
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

export default MovieDetail;