import http from "../http-common-api";
import {AppConfig} from "../config"
class GenresApiService {
  getGenresList(id) {
    return http.get(`/genre/movie/list?api_key=${AppConfig.API_KEY}`);
  }
}

export default new GenresApiService();