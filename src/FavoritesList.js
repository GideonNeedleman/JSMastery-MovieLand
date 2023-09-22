import Favorite from "./Favorite";
import { useMovie } from "./MovieContext";

function FavoritesList() {
  const { favorites } = useMovie();

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <ul>
        {favorites.map((fav) => (
          <Favorite fav={fav} key={fav.imdbid} />
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
