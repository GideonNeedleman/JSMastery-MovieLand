import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import Heart from "./Heart";

const API_URL = "https://www.omdbapi.com/?apikey=68ecbe5d";
// Apocalypse Now: tt0078788

function Detail() {
  const { imdbid } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function searchMovie(imdbid) {
      setIsLoading(true);
      const res = await fetch(`${API_URL}&i=${imdbid}`);
      const data = await res.json();
      setIsLoading(false);
      setMovie(data);
      console.log(data);
    }
    searchMovie(imdbid);
  }, [imdbid]);

  if (isLoading) return <Spinner />;

  return (
    <div className="detail">
      <h1>{movie.Title}</h1>
      {/* <button onClick={() => navigate(-1)}>Back</button> */}
      <img src={movie.Poster} alt={`movie poster of ${movie.Title}`} />
      <h2>
        {movie.Year} - {movie.Runtime}
      </h2>
      {/* <h3>Plot</h3> */}
      <p>{movie.Plot}</p>
      <h3>Director</h3>
      <p>{movie.Director}</p>
      <h3>Writer</h3>
      <p>{movie.Writer}</p>
      <h3>Actors</h3>
      <p>{movie.Actors}</p>
      <a href={`https://www.imdb.com/title/${movie.imdbID}`}>
        More info on IMDb
      </a>
      <Heart />
    </div>
  );
}

export default Detail;
