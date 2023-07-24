import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey=68ecbe5d'

/* const movie = {
  "Title": "Spiderman in Cannes",
  "Year": "2016",
  "imdbID": "tt5978586",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
} */

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search); // fills movies array with search result
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies"
        value="spiderman"
        onChange={() => {}}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => {}}
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
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;