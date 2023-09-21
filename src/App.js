import { useEffect, useState } from "react";
// import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import ErrorMessage from "./ErrorMessage";

const API_URL = "https://www.omdbapi.com/?apikey=68ecbe5d";
// const MovieContext = createContext();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const [maxPages, setMaxPages] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [savedTitle, setSavedTitle] = useState(""); // ensure additional results match searched-for title

  /*   const searchMovies = async (title) => {
    if (title.length === 0) {
      //Guardian protects against running query against empty search term
      setMovies([]);
      setError("Enter search term");
      setMaxPages(0);
      setCurrentPage(0);
      setSavedTitle("");
      console.log("hit 0 length guardian");
      return;
    }

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Response === "True") {
      // check for valid API response
      setMovies(data.Search);
      setError("");
      setMaxPages(Math.trunc(data.totalResults / 10));
      setCurrentPage(1);
      setSavedTitle(title);
      console.log("should be good first page search");
    } else {
      setMovies([]);
      setError(data.Error);
      setMaxPages(0);
      setCurrentPage(0);
      setSavedTitle("");
      console.log("hit response error");
    }
  }; */

  const addMovies = async (savedTitle) => {
    if (currentPage < maxPages) {
      const response = await fetch(
        `${API_URL}&s=${savedTitle}&page=${currentPage + 1}`
      );
      const data = await response.json();
      setCurrentPage(currentPage + 1);
      setMovies([...movies, ...data.Search]); // append new data.Search results to movies array
    }
    if (currentPage === maxPages - 1) setError("No more matches");
  };

  function handleClick() {
    addMovies(savedTitle);
  }

  return (
    <div className="app">
      <h1>MovieSearch</h1>
      <SearchBar />
      <MovieList />

      <div className="empty">
        {currentPage < maxPages ? (
          <button type="button" onClick={() => handleClick()}>
            Load More
          </button>
        ) : (
          <span></span>
        )}
      </div>
      <ErrorMessage />
    </div>
  );
};

export default App;
