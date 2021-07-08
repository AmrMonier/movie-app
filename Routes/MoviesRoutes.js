import express from 'express';
import MoviesController from '../Controllers/MoviesController.js'
import middlewares from '../Middlewares.js'

const Router = express.Router
const routes = new Router();

// Add routes
routes.get('/popular',middlewares.validateUser, MoviesController.popularMovies)
routes.get('/top-rated',middlewares.validateUser, MoviesController.topRated)
routes.get('/most-recent',middlewares.validateUser, MoviesController.mostRecent)
routes.get('/:movie_id',middlewares.validateUser, MoviesController.getMovie)
routes.post('/:movie_id/rate',middlewares.validateUser, MoviesController.reviewMovie)
routes.get('/:movie_id/credits',middlewares.validateUser, MoviesController.movieCredits)
routes.get('/:movie_id/images',middlewares.validateUser, MoviesController.movieImages)
routes.get('/:movie_id/videos',middlewares.validateUser, MoviesController.movieVideos)


export default routes;
