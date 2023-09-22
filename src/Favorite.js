import { useMovie } from "./MovieContext";

function Favorite({ fav }) {
  const { dispatch } = useMovie();
  return (
    <li>
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
        <textarea
          className="note"
          value={fav.note}
          onChange={(e) =>
            dispatch({
              type: "updateNote",
              payload: { imdbid: fav.imdbid, note: e.target.value },
            })
          }
        />
      </div>
    </li>
  );
}

export default Favorite;
