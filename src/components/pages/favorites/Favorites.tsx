import Header from "../../organisms/header/Header";
import spaceman from "../../../assets/spaceman.png";
import FavoritesText from "../../atoms/favoritesText/FavoritesText";
import FavoriteCards from "../../organisms/favoriteCards/FavoriteCards";

function Favorites() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${spaceman})`,
          backgroundRepeat: "no-repear",
          backgroundSize: "cover",
          height: "600px",
        }}
      >
        <Header />
        <FavoritesText />
        <div style={{ marginTop: "220px" }}>
          <FavoriteCards />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
