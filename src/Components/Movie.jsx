const IMG_URL = "https://image.tmdb.org/t/p/w1280/"


function Movie({poster_path, title, vote_average, overview}) {
  return (
    <div className="movie_box">
      <img src={IMG_URL+poster_path} alt="영화포스터"/>
      <div className="movie_info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      <div className="more_info">
        <p>{title}</p>
        <span>{overview}</span>
      </div>
    </div>
  )
}

export default Movie