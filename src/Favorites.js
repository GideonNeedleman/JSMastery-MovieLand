import { useMovie } from "./MovieContext";

function Favorites() {
  const { favorites, dispatch } = useMovie();

  console.log(favorites);

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.imdbid}>
            <span
              className="delete"
              /* onClick={() =>
                dispatch({ type: "delFavorite", payload: fav.imdbid })
              } */
            >
              &times;
            </span>
            <img src={fav.poster} alt={`poster of ${fav.title}`} />
            <div>
              <p className="title">{fav.title}</p>
              <textarea className="note" value={fav.note} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
