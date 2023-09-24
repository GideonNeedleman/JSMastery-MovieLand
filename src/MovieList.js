import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard";
import { useMovie } from "./MovieContext";
import Spinner from "./Spinner";
import ScrollToTop from "./ScrollToTop";

function MovieList() {
  const { movies, isLoading, loadMoreMovies, maxPages, currentPage } =
    useMovie();
  return (
    <>
      <InfiniteScroll
        className="container"
        dataLength={movies.length}
        next={loadMoreMovies}
        hasMore={currentPage <= maxPages}
        endMessage={<h2>All results loaded</h2>}
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
        {movies.length > 0 ? <ScrollToTop /> : ""}
      </InfiniteScroll>

      {isLoading && <Spinner />}
    </>
  );
}

export default MovieList;
