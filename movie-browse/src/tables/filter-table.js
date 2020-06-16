import React from 'react'
import MovieApiService from '../services/movie-api.service'
const Filter = props => {
//------------------------------------
  const handleRateFilterChange = event => {
    const { value } = event.target
    props.setRateFilter(value);
  }
//------------------------------------
const handleGenresFilterChange = event => {
  const { id, name, checked } = event.target;
  let genresEdit={"id":id,"name":name,"checked":checked}
  props.setGenresList(props.genresList.map(genres=>(genres.id==id?genresEdit:genres)));

  MovieApiService.getMovieListSortbyPopularity(props.rateFilter, props.genresList).then(res=>{
    const mList=res.data.results.map(
      (rs)=>{
      return {"id":rs.id, "title":rs.title, "genre_ids":rs.genre_ids,
      "vote_average":rs.vote_average, "poster_path":rs.poster_path, "popularity":rs.popularity }
      });
      props.setMovieList(mList);
    },error=>{
    console.log(error);
    alert(JSON.stringify(error));
  });
} 
//------------------------------------
  const rateFilterChange = event => {
    MovieApiService.getMovieListSortbyPopularity(props.rateFilter, props.genresList).then(res=>{
      const mList=res.data.results.map(
        (rs)=>{
        return {"id":rs.id, "title":rs.title, "genre_ids":rs.genre_ids,
        "vote_average":rs.vote_average, "poster_path":rs.poster_path, "popularity":rs.popularity }
        });
        props.setMovieList(mList);
      },error=>{
      console.log(error);
      alert(JSON.stringify(error));
    });
  }
//------------------------------------
return (
<div className="container padding-3 margin-3 movie-list" >
    {props.genresList.length > 0 ? (
      <div className="row table-bordered padding-3 margin-12">
      <h5>Genres Filtering:</h5>
      <div className="col-xs-12 padding-3">
        {props.genresList.map(genres => (  
          <div className="d-inline">
            <input type="checkbox" id={genres.id} name={genres.name}  checked={genres.checked}
            onChange={handleGenresFilterChange}
            />
            <label for={genres.id}> {genres.name}({genres.id}) </label>  &nbsp; &nbsp;
          </div>
        ))}
        </div>
        </div>
      ) : (
        <div className="row table-bordered padding-3 margin-12">
          <div>No genres found for filtering</div>
        </div>
      )}
 <div className="row table-bordered padding-3 margin-12">
 <div className="col form-group">
 <label for="formControlRange"><h5>Rate Filtering : {props.rateFilter} </h5></label>
    <input type="range" min="0" max="10" step=".1" name="rateFilter" value={props.rateFilter} 
    onMouseUp={rateFilterChange}
    onChange={handleRateFilterChange} class="form-control-range" id="formControlRange" />
</div>
 </div>     
</div>
)} 
export default Filter