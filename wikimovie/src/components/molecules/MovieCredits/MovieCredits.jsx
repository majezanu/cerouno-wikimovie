import React from 'react'
import ActorCard from '../ActorCard/ActorCard'
import './MovieCredits.css';
const MovieCredits = (props) => {
    return (
        <div className="container  credits-container ">
            <div className="row d-flex justify-content-center text-center">
                <h1>Actores</h1>
            </div>
            <div className="row  d-flex justify-content-center text-center">
                {
                    props.cast && props.cast.map((member) => <ActorCard actor={member}></ActorCard>)
                }
            </div>
        </div>
    );
}

export default MovieCredits