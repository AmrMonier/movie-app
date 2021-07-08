import axios from "axios";
import config from "../config.js";

class TheMovieDBController {
  async initGuestSession() {
    let res = await axios.get(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${config.moviesApiKey}`
    );

    config.guestSession = res.data;
    console.log(res.data);
  }
  async deleteGuestSession(req, res) {
    axios.delete(
      `https://api.themoviedb.org/3/authentication/session?api_key=${config.moviesApiKey}`
    );
  }
}

export default new TheMovieDBController();
