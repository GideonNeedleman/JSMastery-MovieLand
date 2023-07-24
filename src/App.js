import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey=68ecbe5d'

/* To implement infinite scroll we need to:
1. save the number of 'pages' we can retrieve
2. remember current page, so we know which is next page to load
3. load more items from next page into movies array when scroll to bottom of screen
4. If current page === max pages then don't load more, maybe display a 'no more matches' message */

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

    if (data.Response === 'True') { // check for valid API response
      setMovies(data.Search);
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
  }, []) // Set displayed message on initial page load

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
          {/* map method loops over all elements in array and calls MovieCard component for each of them */}
        </div>
        ) : (
          <div className="empty">
            <h2>{error}</h2> {/* display error message */}
          </div>
        )
      }
    </div>
  );
}

export default App;