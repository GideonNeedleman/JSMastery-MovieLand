import fullHeart from "./assets/heart-full.svg";
import emptyHeart from "./assets/heart-empty.svg";
import { useState } from "react";

function Heart({ imdbid = "0" }) {
  const [clicked, setClicked] = useState(false);

  return (
    <span className="heart" onClick={() => setClicked((click) => !click)}>
      {clicked ? (
        <img src={fullHeart} alt="full heart icon" />
      ) : (
        <img src={emptyHeart} alt="empty heart icon" />
      )}
    </span>
  );
}

export default Heart;
