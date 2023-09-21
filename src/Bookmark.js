import { useMovie } from "./MovieContext";

function Bookmark({ imdbid }) {
  const { dispatch } = useMovie();

  function handleAddFavorite(e) {
    e.preventDefault();
    dispatch({ type: "addFavorite", payload: imdbid });
  }

  return (
    <div className="bookmark">
      <button onClick={handleAddFavorite}>Add movie</button>
    </div>
  );
}

export default Bookmark;
