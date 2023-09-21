import { useEffect, useState } from "react";
import { useMovie } from "./MovieContext";
import BookmarkEmpty from "./assets/bookmark-empty.svg";
import BookmarkFull from "./assets/bookmark-full.svg";

function Bookmark({ imdbid }) {
  const { favorites, dispatch } = useMovie();
  const [isFavorite, setIsFavorite] = useState(false);
  const [note, setNote] = useState("");

  function handleAddFavorite(e) {
    e.preventDefault();
    dispatch({ type: "addFavorite", payload: { imdbid: imdbid, note: note } });
  }
  function handleDelFavorite(e) {
    e.preventDefault();
    dispatch({ type: "delFavorite", payload: imdbid });
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && isFavorite) {
      dispatch({ type: "updateNote", payload: { imdbid, note } });
      return;
    }
    if (e.keyCode === 13) handleAddFavorite(e);
  };

  // check if movie is already in favorites list
  useEffect(() => {
    setIsFavorite(favorites.some((el) => el.imdbid === imdbid));
  }, [favorites, imdbid]);

  useEffect(() => console.log("isFavorite = " + isFavorite));

  return (
    <div className="bookmark">
      <p>
        {isFavorite ? (
          <span onClick={handleDelFavorite}>
            <img src={BookmarkFull} alt="" /> Delete movie
          </span>
        ) : (
          <span onClick={handleAddFavorite}>
            <img src={BookmarkEmpty} alt="" /> Add movie
          </span>
        )}
      </p>
      <input
        placeholder="add note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Bookmark;
