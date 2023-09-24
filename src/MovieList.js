import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard";
import { useMovie } from "./MovieContext";
import Spinner from "./Spinner";

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
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </InfiniteScroll>

      {isLoading && <Spinner />}
    </>
  );
}

export default MovieList;
