import React, { useState, useEffect, useConstructor, useRef } from 'react'
import MovieView from './tables/movie-table'
import Filter from './tables/filter-table'
import MovieApiService from './services/movie-api.service'
import GenresApiService from './services/genres-api.service'
import './App.css';

const App = () => {
 const [genresList, setGenresList] = useState([{}]);
 const [movieList, setMovieList] = useState([{}]);
 const [rateFilter, setRateFilter] = useState(1);
  useEffect(() => {
    GenresApiService.getGenresList().then(res=>{
      console.log(res);
      const gList=res.data.genres.map(
        (rs)=>{
        return { "id":rs.id, "name":rs.name, "checked":false }
        });
        setGenresList(gList);
        loadMovies(gList);
      },error=>{
      console.log(error);
      alert(JSON.stringify(error));
    }); 
  }, []);
//-------
  const handlePageChange = event => {
    //const { value } = event.target
    //alert(JSON.stringify(event.target));
  }

  function loadMovies(gList){
    MovieApiService.getMovieListSortbyPopularity(rateFilter, gList).then(res=>{
      const mList=res.data.results.map(
        (rs)=>{
        return {"id":rs.id, "title":rs.title, "genre_ids":rs.genre_ids,
        "vote_average":rs.vote_average, "poster_path":rs.poster_path, "popularity":rs.popularity }
        });
        setMovieList(mList);
      },error=>{
      console.log(error);
      alert(JSON.stringify(error));
    });
  }
  //---------------------------------------
  return (
    <div className="container">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/#" className="navbar-brand">
     TMDB Movie Search 
       </a>
    </nav>
      <div className="row padding-3">
        <div className="col-sx-12 col-sm-6 ">
          <h3>Filters</h3>
          <Filter setRateFilter={setRateFilter} rateFilter={rateFilter} 
          setGenresList={setGenresList}
          genresList={genresList} setMovieList={setMovieList}/>
        </div>
        <div className="col-sx-12 col-sm-6">
          <h3>Movie List</h3>
          <MovieView movieList={movieList}  setGenresList={setGenresList}/>
          <nav aria-label="Page navigation margin-6">
            <ul className="pagination justify-content-end" onChange={handlePageChange}>
              <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#">5</a></li>
              <li className="page-item"><a className="page-link" href="#">6</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
          
        </div>
      </div>
    </div>
  )
}

export default App;
