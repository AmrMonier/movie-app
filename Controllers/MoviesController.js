import axios from "axios";
import configObj from "../config.js";
import TheMovieDBController from "./TheMovieDBController.js";
axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

const apiKey = `api_key=${configObj.moviesApiKey}`;

class MoviesController {
  async popularMovies(req, res) {
    axios
      .get(`/popular?${apiKey}`)
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((error) => {
        res.status(error.response.status).json({ mgs: error.message });
      });
  }
  async topRated(req, res) {
    axios
      .get(`/top_rated?${apiKey}`)
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((error) => {
        res.status(error.response.status).json({ mgs: error.message });
      });
  }
  async mostRecent(req, res) {
    axios
      .get(`/latest?${apiKey}`)
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((error) => {
        res.status(error.response.status).json({ mgs: error.message });
      });
  }
  async getMovie(req, res) {
    const movieId = req.params.movie_id;
    axios
      .get(`/${movieId}?${apiKey}`)
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((error) => {
        res.status(error.response.status).json({ mgs: error.message });
      });
  }
  async reviewMovie(req, res) {
    if (!configObj.guestSession) {
      console.log(5);
      await TheMovieDBController.initGuestSession()
    }
    const rate = {value: req.body.rate};
    const movieId = req.params.movie_id;
    console.log(configObj.guestSession);
    const guestSession = `&guest_session_id=${configObj.guestSession.guest_session_id}`
    console.log(`/${movieId}/rating?${apiKey}${guestSession}`);
    console.log(rate);
    axios
      .post(`/${movieId}/rating?${apiKey}${guestSession}`, rate)
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((error) => {
        res.status(error.response.status).json({ mgs: error.message });
      });
  }
  async movieImages(req, res) {
    const movieId = req.params.movie_id;
    axios
      .get(`/${movieId}/images?${apiKey}`)
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((error) => {
        res.status(error.response.status).json({ mgs: error.message });
      });
  }
  async movieVideos(req, res) {
    const movieId = req.params.movie_id;
    axios
      .get(`/${movieId}/videos?${apiKey}`)
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((error) => {
        res.status(error.response.status).json({ mgs: error.message });
      });
  }

  async movieCredits(req, res) {
    const movieId = req.params.movie_id;
    axios
      .get(`/${movieId}/credits?${apiKey}`)
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((error) => {
        res.status(error.response.status).json({ mgs: error.message });
      });
  }
}

export default new MoviesController();
