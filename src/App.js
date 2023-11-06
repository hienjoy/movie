import Movie from './Components/Movie/Movie';
import {movies} from './movieDummy';
import * as M from './Components/Movie/Movie.style'

function App() {
  const showInfo=()=>{
    
  };

  return (
    <M.bg>
      <M.movie_container>
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
      </M.movie_container>
    </M.bg>
  )
}

export default App;
