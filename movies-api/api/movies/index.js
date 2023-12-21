import movieModel from './movieModel'
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getUpcomingMovies, getMovies, getGenres, getMovie, getMovieImages, getMovieReviews, getTrendingMovies, getTopRatedMovies,
    getNowPlayingMovies, getActors, getSimilarMovies, getActorMovieCredits, getAltTitles, getWatchProviders, getTrailers, getTranslations} from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; 
    [page, limit] = [+page, +limit]; 

    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); 
    
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));
router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genre', asyncHandler(async (req, res) => {
    const genre = await getGenres();
    res.status(200).json(genre);
}));

router.get('/tmdb/movie/:movieId/getAltTitles', asyncHandler(async (req, res) => {
    const altTitles = await getAltTitles(req.params.movieId);
    res.status(200).json(altTitles);
}));

router.get('/tmdb/movie/:movieId/getWatchProviders', asyncHandler(async (req, res) => {
    const watchProviders = await getWatchProviders(req.params.movieId);
    res.status(200).json(watchProviders);
}));

router.get('/tmdb/discover', asyncHandler(async (req, res) => {
    const movies = await getMovies(); 
    res.status(200).json(movies);
}));


router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const movie = await getMovie(req.params.id);
    res.status(200).json(movie);
}));

router.get('/tmdb/movie/:id/images', asyncHandler(async (req, res) => {
    const images = await getMovieImages(req.params.id);
    res.status(200).json(images);
}));

router.get('/tmdb/movie/:id/reviews', asyncHandler(async (req, res) => {
    const reviews = await getMovieReviews(req.params.id);
    res.status(200).json(reviews);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const trendingMovies = await getTrendingMovies();
    res.status(200).json(trendingMovies);
}));

router.get('/tmdb/toprated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));


router.get('/tmdb/nowplaying', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));

router.get('/tmdb/movie/:id/actors', asyncHandler(async (req, res) => {
    const actors = await getActors(req.params.id);
    res.status(200).json(actors);
}));

router.get('/tmdb/:id/similar', asyncHandler(async (req, res) => {
    const similarMovies = await getSimilarMovies(req.params.id);
    res.status(200).json(similarMovies);
}));

router.get('/tmdb/actors/:actorId/moviecredits', asyncHandler(async (req, res) => {
    const movieCredits = await getActorMovieCredits(req.params.actorId);
    res.status(200).json(movieCredits);
}));

router.get('/tmdb/movie/:movieId/trailers', asyncHandler(async (req, res) => {
    const trailers = await getTrailers(req.params.movieId);
    res.status(200).json(trailers);
}));

router.get('/tmdb/movie/:movieId/translations', asyncHandler(async (req, res) => {
    const translations = await getTranslations(req.params.movieId);
    res.status(200).json(translations);
}));


export default router;