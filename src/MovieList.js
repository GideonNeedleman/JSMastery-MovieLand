import MovieCard from "./MovieCard";
import { useMovie } from "./MovieContext";

function MovieList() {
  const { movies } = useMovie();
  return (
    <div className="container">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
