import { useState } from "react";
import { useMovie } from "./MovieContext";
import BookmarkEmpty from "./assets/bookmark-empty.svg";
import BookmarkFull from "./assets/bookmark-full.svg";

function Bookmark({ imdbid }) {
  const { dispatch } = useMovie();
  const [isFavorite, setIsFavorite] = useState(false);
  const [note, setNote] = useState("");

  function handleAddFavorite(e) {
    e.preventDefault();
    dispatch({ type: "addFavorite", payload: { imdbid: imdbid, note: note } });
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleAddFavorite(e);
    }
  };

  return (
    <div className="bookmark">
      <p onClick={handleAddFavorite}>
        <img src={BookmarkEmpty} alt="" /> Add movie
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
