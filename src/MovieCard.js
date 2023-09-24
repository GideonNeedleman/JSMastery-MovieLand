import { Link } from "react-router-dom";
import placeholder from "./assets/vertical-placeholder.jpg";

const MovieCard = ({ movie }) => {
  return (
    <Link to={"detail/" + movie.imdbID}>
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : placeholder}
            alt={movie.Title}
          />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
