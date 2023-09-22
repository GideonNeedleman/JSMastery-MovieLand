import { useState } from "react";

function Favorite({ fav }) {
  const [note, setNote] = useState(fav.note);
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
          value={note}
          onChange={() => setNote(note)}
        />
      </div>
    </li>
  );
}

export default Favorite;
