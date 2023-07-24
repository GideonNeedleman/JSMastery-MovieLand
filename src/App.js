import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey=68ecbe5d'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const searchMovies = async (title) => {
    if (title.length === 0) { //Guardian protects against running query against empty search term
      setError('Enter search term');
      setMovies([]);
      return;
    }
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    if (data.Response === 'True') {
      setMovies(data.Search); // fills movies array with search result
      setError('');
    } else {
      setMovies([]); // empties movies array if there's an error (like too many matches for 1 or 2 character searches)
      setError(data.Error);
    }
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      searchMovies(searchTerm);
    }
  }

  useEffect(() => {
    setError('Enter search term');
  }, []) //initially used to set default search term on page load

  return (
    <div className="app">
      <h1>MovieSearch</h1>

      <div className="search">
        <input placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
      />
      </div>

      {
        movies.length > 0
        ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie = {movie}/>
          ))}
          {/* map method loops over all elements in array and calls MovieCard component for them */}
        </div>
        ) : (
          <div className="empty">
            <h2>{error}</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;