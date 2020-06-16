import React from 'react'
const imgUrl="http://image.tmdb.org/t/p/w92";
const MovieView = props => (
<div className="container padding-3 margin-3 movie-list" >

    {props.movieList.length > 0 ? (
        props.movieList.map(movie => (
          <div className="row table-bordered padding-3 margin-12">
          <div className="col-xs-3 align-self-center padding-3">
            <img alt="Poster" src={imgUrl+movie.poster_path} className="movie-img" />
          </div>
          <div className="col-xs-9 align-self-start padding-3 margin-3">
          <div className="movie-title"> Movie Tile : {movie.title}</div>
          <div> Rating : {movie.vote_average} </div>
          <div> Genres : {JSON.stringify(movie.genre_ids)}  </div>
          <div> Popularity : {movie.popularity} </div>
          </div>
        </div>
        ))
      ) : (
        <div className="row table-bordered padding-3 margin-12">
          <div>No movie found </div>
        </div>
      )}
</div>
)

export default MovieView