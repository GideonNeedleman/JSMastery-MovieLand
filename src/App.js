import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import ErrorMessage from "./ErrorMessage";
import Header from "./Header";

const App = () => {
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

  /*   const addMovies = async (savedTitle) => {
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
  } */

  return (
    <div className="app">
      <Header />
      <SearchBar />
      <MovieList />
      <ErrorMessage />
      {/*       <div className="empty">
        {currentPage < maxPages ? (
          <button type="button" onClick={() => handleClick()}>
            Load More
          </button>
        ) : (
          <span></span>
        )}
      </div> */}
    </div>
  );
};

export default App;
