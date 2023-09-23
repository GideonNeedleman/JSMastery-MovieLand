import { Link } from "react-router-dom";
import { useMovie } from "./MovieContext";

function Favorite({ fav }) {
  const { dispatch } = useMovie();

  function confirmDelete() {
    if (window.confirm("Are you sure you want to remove?"))
      dispatch({ type: "delFavorite", payload: fav.imdbid });
  }

  return (
    <li>
      <span
        className="delete"
        onClick={
          confirmDelete /* dispatch({ type: "delFavorite", payload: fav.imdbid }) */
        }
      >
        &times;
      </span>
      <Link to={"/detail/" + fav.imdbid}>
        <img src={fav.poster} alt={`poster of ${fav.title}`} />
      </Link>
      <div className="title-note">
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
