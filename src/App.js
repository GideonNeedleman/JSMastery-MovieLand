import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey=68ecbe5d'

// CURRENT WEIRD BUG: setter functions don't work on first try. they do work on second try. Why? I think something to do with being called inside async functions.

/*
To implement infinite scroll we need to:
1. save the number of 'pages' we can retrieve
2. remember current page, so we know which is next page to load
3. load more items from next page into movies array when scroll to bottom of screen
4. If current page === max pages then don't load more, maybe display a 'no more matches' message

Potential bug if one edits title inside search bar, but then scrolls down without searching. The addMovies function will try to add new results to the movies array, but will reference the edited text while existing results are for unedited text

Note: will need to add an up arrow to return to top since excessive scrolling is now expected
*/

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const [maxPages, setMaxPages] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [savedTitle, setSavedTitle] = useState(''); // ensure additional results match searched-for title

  const searchMovies = async (title) => {
    if (title.length === 0) { //Guardian protects against running query against empty search term
      setMovies([]);
      setError('Enter search term');
      setMaxPages(0);
      setCurrentPage(0);
      setSavedTitle('');
      console.log('hit 0 length guardian');
      return;
    }

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Response === 'True') { // check for valid API response
      setMovies(data.Search);
      setError('');
      setMaxPages(Math.trunc(data.totalResults/10));
      setCurrentPage(1);
      setSavedTitle(title);
      console.log('should be good first page search');
    } else {
      setMovies([]);
      setError(data.Error);
      setMaxPages(0);
      setCurrentPage(0);
      setSavedTitle('');
      console.log('hit response error');
    }
  }

  const addMovies = async (savedTitle) => {
    if(currentPage < maxPages) {
      const response = await fetch(`${API_URL}&s=${savedTitle}&page=${currentPage+1}`);
      const data = await response.json();
      setCurrentPage(currentPage+1);
      setMovies([...movies, ...data.Search]); // append new data.Search results to movies array
    } else {
      setError('No additional matches');
    }
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      searchMovies(searchTerm);
    }
  }

  useEffect(() => {
    setError('Enter search term'); // Set displayed message on initial page load
/*     window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); */
  }, []);

  useEffect(() => {
    console.log('max pages ' + maxPages)
  }, [maxPages]);

  useEffect(() => {
    console.log('current page ' + currentPage)
  }, [currentPage]);

  useEffect(() => {
    console.log('saved title: ' + savedTitle)
  }, [savedTitle]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('Scrolling...');
    addMovies(savedTitle);
  }

  function handleClick() {
    addMovies(savedTitle);
  }

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

      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie = {movie}/>
        ))}
        {/* map method loops over all elements in array and calls MovieCard component for each of them */}
      </div>

      <div className="empty">
          {
            currentPage < maxPages ? (
              <button
                type="button"
                onClick={() => handleClick()}
                >
                Load More
              </button>
            ) : (
              <span></span>
            )
          }
        <h2>{error}</h2> {/* display error message */}
      </div>
    </div>
  );
}

export default App;