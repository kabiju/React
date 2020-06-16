import MovieApiService from '../services/movie-api.service'
import { any } from 'prop-types';
class MovieApiAdaptor {
  
    getMovieList(id:any) {
        var mList=[];
        return MovieApiService.getMoviebyGenres(id);
        
        
        /*
        .then(res=>{
        mList=res.data.results.map((rs:any)=>{
          return {"id":rs.id, "title":rs.title, "genre_ids":rs.genre_ids,"vote_average":rs.vote_average, "poster_path":rs.poster_path}
          });
          alert("mList::"+JSON.stringify(mList));
          return mList;
        },error=>{
        console.log(error);
        alert(JSON.stringify(error));
      });
    */
    }

    
}

export default new MovieApiAdaptor();