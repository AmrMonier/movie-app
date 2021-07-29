import express from 'express';
import MoviesController from '../Controllers/MoviesController.js'
import middlewares from '../Middlewares.js'

const Router = express.Router
const routes = new Router();

// Add routes
routes.get('/popular', MoviesController.popularMovies)
routes.get('/top-rated', MoviesController.topRated)
routes.get('/most-recent', MoviesController.mostRecent)
routes.get('/:movie_id', MoviesController.getMovie)
routes.post('/:movie_id/rate', middlewares.validateUser, MoviesController.reviewMovie)
routes.get('/:movie_id/credits', MoviesController.movieCredits)
routes.get('/:movie_id/images', MoviesController.movieImages)
routes.get('/:movie_id/videos', MoviesController.movieVideos)


export default routes;
