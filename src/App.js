import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './assets/find.png'     
import Moviecard from './Moviecard';


function App() {
  const[searchTerm, setSearchTerm] = useState('')
  const[movies, setMovies] = useState([])

  async function getMovies(title){
    const response = await fetch(`http://www.omdbapi.com?apikey=b2267257&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
    console.log(data.Search)
    
  }

  useEffect(() => {
    getMovies('superman')

  }, [])

  const movieElements = movies? (movies.map(movie => {
      return <Moviecard 
      key={movie.Title}
      year={movie.Year}
      poster={movie.Poster !== 'N/A'? movie.Poster: 'https://via.placeholder.com/400'}
      title={movie.Title}
      type={movie.Type}
    />
     })): (
    <div className='empty'>
      <h2>Sorry, No movies found</h2>
    </div>
     )

  return (
    <div className='App'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
           placeholder='search for movie'
           type='text'
           value={searchTerm}
           onChange={e => setSearchTerm(e.target.value)}
        />
        <img 
          src={searchIcon}
          alt='search Icon'
          onClick={() => getMovies(searchTerm)}
        />
      </div>

      <div className='container'>
        {movieElements}
        
      </div>
    </div>
  );
}

export default App;
