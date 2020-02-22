import React, { useState,useEffect} from 'react'
import Text from '../../atoms/Text/Text'
import Image from '../../atoms/Image/Image';
import './MovieDetail.css';
import Title from '../../atoms/Title/Title';
import MovieRepository from '../../../data/MovieRepository';
import Navbar from '../../molecules/Navbar/Navbar';
import RatingMeter from '../../atoms/RatingMeter/RatingMeter';
import Footer from '../../atoms/Footer/Footer';
import Icon from '../../atoms/Icon/Icon';
import MovieUtils from '../../../utils/MovieUtils';
const MovieDetail = (props) => {
    const openHomePage = (e) => {
        e.preventDefault();
        props.history.push('/');
    }
    const { params } = props.match;
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState({});
    const fetchMovie = () => {
        MovieRepository.getMovieById(setDataResponse, loading, params.id);        
    }

    const setDataResponse = (response) =>{
        setMovie(response);
    }
    const loading = () => {
        console.log('Loading finish');
    }

    useEffect(() => fetchMovie(), []);

    return (
    <div className="container-fluid">
        <Navbar openPageAction={openHomePage}></Navbar>
        {
            movie && 
            <div className="row">
                <div className="col">
                    <div className="imagebox-detail"   >
                        <Image
                            style={`image-cover-detail container-fluid`}
                            image={MovieRepository.serveBackdropImage(movie.backdrop_path)}/>
                        <div id="carouselExampleControls" className="carousel slide imagebox-desc-detail" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-3">
                                                <Image style={`rounded img-fluid movie-img-detail`} image={MovieRepository.servePosterImage(movie.poster_path)}/>
                                            </div>
                                            <div className="col">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                        <Title>{movie.title} ({movie.status})</Title>
                                                        <h5>Resumen</h5>
                                                        <Text>{movie.overview}</Text>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <h5>Géneros</h5>
                                                            {
                                                                movie.genres && movie.genres.length > 0 && 
                                                                movie.genres.map((genre) => {
                                                                    return <label key={genre.id}>{genre.name}&nbsp;&nbsp;&nbsp;</label>})
                                                            }
                                                        </div>
                                                        <div className="col">
                                                        <h5>IMDB Rating</h5>
                                                        <RatingMeter value={movie.vote_average * 10}></RatingMeter>
                                                        </div>
                                                    </div>
                                                </div>                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <h1>Actores</h1>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        }
        <Footer>
            {
                movie &&
                <div className="container-fluid bg-light text-dark">
                <div className="row justify-content-between movie-detail-footer">
                    <div className="row">
                        <h3>
                            <Icon icon='clock' /> Duración: {MovieUtils.calcTime(movie.runtime)}
                        </h3>
                    </div>
                    <div className="row">
                        <h3>
                            <Icon icon='file-invoice-dollar' /> Presupuesto: {MovieUtils.convertMoney(movie.budget)}
                        </h3>
                    </div>
                    <div className="row">
                        <h3>
                            <Icon icon='ticket-alt' /> Ingresos: {MovieUtils.convertMoney(movie.revenue)}
                        </h3>
                    </div>
                </div>
            </div>
            }
        </Footer>
    </div>
    );
};

export default MovieDetail;