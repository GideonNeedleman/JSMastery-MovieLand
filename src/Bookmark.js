import { useEffect, useState } from "react";
import { useMovie } from "./MovieContext";
import BookmarkEmpty from "./assets/bookmark-empty.svg";
import BookmarkFull from "./assets/bookmark-full.svg";

function Bookmark({ imdbid, title, poster, year }) {
  const { favorites, dispatch } = useMovie();
  const [isFavorite, setIsFavorite] = useState(false);
  const [note, setNote] = useState("");

  function handleFavorite(e) {
    e.preventDefault();
    if (isFavorite) {
      dispatch({ type: "delFavorite", payload: imdbid });
      setNote("");
    } else {
      dispatch({
        type: "addFavorite",
        payload: { imdbid, note, title, poster, year },
      });
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && isFavorite) {
      dispatch({ type: "updateNote", payload: { imdbid, note } });
      return;
    }
    if (e.keyCode === 13) handleFavorite(e);
  };

  // check if movie is already in favorites list
  useEffect(() => {
    setIsFavorite(favorites.some((el) => el.imdbid === imdbid));
  }, [favorites, imdbid]);

  // load existing note into note field
  useEffect(() => {
    if (isFavorite) {
      setNote(favorites.filter((el) => el.imdbid === imdbid)[0]?.note);
    }
  }, [favorites, imdbid, isFavorite]);

  return (
    <div className="bookmark">
      <p onClick={handleFavorite}>
        {isFavorite ? (
          <span>
            <img src={BookmarkFull} alt="full bookmark icon" /> Remove movie
          </span>
        ) : (
          <span>
            <img src={BookmarkEmpty} alt="empty bookmark icon" /> Add movie
          </span>
        )}
      </p>
      <input
        placeholder="optional note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Bookmark;
