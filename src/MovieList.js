import MovieCard from "./MovieCard";
import { useMovie } from "./MovieContext";
import Spinner from "./Spinner";

function MovieList() {
  const { movies, isLoading } = useMovie();
  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        movies.map((movie) => <MovieCard movie={movie} key={movie.imdbid} />)
      )}
    </div>
  );
}

export default MovieList;
