import React, {useState, useEffect } from 'react'
import Movie from '../../molecules/Movie/Movie'
import MovieRepository from '../../../data/MovieRepository'
import MovieFeed from '../../organisms/MovieFeed/MovieFeed';
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => MovieRepository.getPopularMovies(setDataResponse, loading, 1 ), []);
    const setDataResponse = (response) =>{
        setMovies(response.results);
        setPage(response.page);
        setTotalResults(response.total_results);
        setTotalPages(response.total_pages);
    }
    const loading = () => {
        console.log('Loading finish');
    }
    
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Movie type='cover' movie={movies.length > 0 ? movies[1] : null}></Movie>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MovieFeed movies={movies} title='Popular'></MovieFeed>
                </div>
            </div>
        </div>
    )
};

export default Home