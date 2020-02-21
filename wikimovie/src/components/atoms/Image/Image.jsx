import React from 'react'

const Image = (props) => (
    <img src={
        props.image ? props.image : 'https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg'} 
        alt={props.alt ? props.alt : 'NotFound'}
        className={props.style}/>
);

export default Image