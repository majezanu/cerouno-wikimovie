import React from 'react'
import Image from '../../atoms/Image/Image'
import MovieRepository from '../../../data/MovieRepository';
import './ActorCard.css';
import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
const ActorCard = (props) => (
    <div className="col-4 container card text-dark actor-card-detail">
        <div className="row">
                <div className="col">
                <Image style={`rounded img-fluid actor-img-detailf`} image={MovieRepository.servePosterImage(props.actor.profile_path)}></Image>
                </div>
                <div className="col">
                <Title>{props.actor.name}</Title>
                <Text>{props.actor.character}</Text>
                </div>
            </div>
        
    </div>
);
export default ActorCard