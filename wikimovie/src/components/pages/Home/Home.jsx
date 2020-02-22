import React, {useState, useEffect } from 'react'
import Movie from '../../molecules/Movie/Movie'
import MovieRepository from '../../../data/MovieRepository'
import MovieFeed from '../../organisms/MovieFeed/MovieFeed';
import Navbar from '../../molecules/Navbar/Navbar';
const Home = (props) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const fetchMovies = (page, search) => {
        if(search) {
            MovieRepository.searchMovies(setDataResponse, loading, search, page);
        } else {
            MovieRepository.getPopularMovies(setDataResponse, loading, page );
        }
        
    }
    const fetchNextPage = (e) => {
        e.preventDefault();
        if(page < totalPages)
        {
            setPage(prevPage => prevPage + 1);
        }
    }
    useEffect(() => fetchMovies(page, searchTerm), [page, searchTerm]);
    const setDataResponse = (response) =>{
        setMovies(movies.concat(response.results));
        setPage(response.page);
        setTotalResults(response.total_results);
        setTotalPages(response.total_pages);
    }
    const loading = () => {
        console.log('Loading finish');
    }
    const search = (e, searchTerm) => {
        e.preventDefault();
        setSearchTerm(searchTerm);
        setMovies([]);
        setPage(1);
    }
    const openDetailPage = (e, id) => {
        e.preventDefault();
        openPage(`/movie/${id}`);
    }

    const openPage = (pageToOpen) => {
        props.history.push(pageToOpen);
    }
    
    
    return (
        <div className="container-fluid">
            <Navbar searchAction={search} ></Navbar>
            <div className="row">
                <div className="col">
                    <Movie 
                        type='cover' 
                        openDetailAction={openDetailPage} 
                        movie={movies.length > 0 ? movies[0] : null}></Movie>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MovieFeed 
                        openDetailAction={openDetailPage}
                        total={totalResults}
                        movies={movies} 
                        title={searchTerm ? `Resultados para ${searchTerm}` : 'Popular'}
                        loadMoreAction={fetchNextPage}></MovieFeed>
                </div>
            </div>
        </div>
    )
};

export default Home