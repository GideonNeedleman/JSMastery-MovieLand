import Favorite from "./Favorite";
import Header from "./Header";
import { useMovie } from "./MovieContext";

function FavoritesList() {
  const { favorites } = useMovie();

  return (
    <div className="favorites">
      <Header title="Favorites" />
      <ul>
        {favorites.map((fav) => (
          <Favorite fav={fav} key={fav.imdbid} />
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
