import { useMovie } from "./MovieContext";
import SearchIcon from "./search.svg";

function SearchBar() {
  const { searchTerm, searchMovies, dispatch } = useMovie();

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchMovies(searchTerm);
    } else {
      dispatch({ type: "clearMovies" });
    }
  };

  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) =>
          dispatch({ type: "setSearchTerm", payload: e.target.value })
        }
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
      />
    </div>
  );
}

export default SearchBar;
