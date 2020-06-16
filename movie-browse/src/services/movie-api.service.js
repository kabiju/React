import http from "../http-common-api";
import {AppConfig} from "../config"
class MovieApiService {
  getAll() {
    return http.get("/tutorials");
  }

  getMoviebyGenres(id) {
    return http.get(`/discover/movie?with_genres=${id}&api_key=${AppConfig.API_KEY}`);
  }

  getMoviebyPopularity() {
    return http.get(`/movie/popular?api_key=${this.apikey}`);
  }

  getMovieListSortbyPopularity(rating, gList) {
    var with_genres=gList.filter(genres=>(genres.checked)).map(gen=>(gen.id)).toString();
    return http.get(`/discover/movie?api_key=${AppConfig.API_KEY}&sort_by=popularity.desc&vote_average.gte=${rating}&language=en-US&with_genres=${with_genres}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }




}

export default new MovieApiService();