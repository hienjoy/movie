import Movie from './Components/Movie';
import {movies} from './movieDummy';

function App() {
  const showInfo=()=>{
    
  };

  return (
    <div>
      <div className="movie_container">
        {
          movies.results.map((item)=>{
            return (
              <Movie 
                poster_path={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
