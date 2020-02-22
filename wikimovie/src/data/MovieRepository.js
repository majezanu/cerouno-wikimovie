const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3aaf7a9913e3b484843beef0da4d7863';
const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

class MovieRepository {
    static getPopularMovies(responseCallback, loadingCallback, page) {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=es-MX&page=${page}`)
            .then(response => response.json())
            .then(response => responseCallback(response))
            .catch(error => console.log(error))
            .finally(() => loadingCallback());
    }
    static searchMovies(responseCallback, loadingCallback, searchTerm, page) {
        fetch(`${API_URL}search/movie?api_key=${API_KEY}&language=es-MX&page=${page}&query=${searchTerm}`)
            .then(response => response.json())
            .then(response => responseCallback(response))
            .catch(error => console.log(error))
            .finally(() => loadingCallback());
    }
    static getMovieById(responseCallback, loadingCallback, id) {
        fetch(`${API_URL}movie/${id}?api_key=${API_KEY}&language=es-MX`)
            .then(response => response.json())
            .then(response => responseCallback(response))
            .catch(error => console.log(error))
            .finally(() => loadingCallback());
    }
    static getCredits(responseCallback, loadingCallback, id) {
        fetch(`${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=es-MX`)
            .then(response => response.json())
            .then(response => responseCallback(response))
            .catch(error => console.log(error))
            .finally(() => loadingCallback());
    }
    static serveBackdropImage(url) {
        return `${IMAGE_BASE_URL}w1280${url}`
    }

    static servePosterImage(url) {
        return `${IMAGE_BASE_URL}w500${url}`
    }
}

export default MovieRepository