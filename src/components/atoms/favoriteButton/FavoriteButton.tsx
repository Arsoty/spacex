import HeartImage from "../heartImage.tsx/HeartImage";
import "./FavoriteButton.css";
import { Link } from "react-router-dom";
import { pageState } from "../../../state/atoms";
import { useRecoilState } from "recoil";

function FavoriteButton() {
  const [page, setPage] = useRecoilState(pageState);

  return page === "home" ? (
    <Link to="/favorites">
      <button
        className={"favoriteBtn"}
        onClick={() => {
          setPage("favs");
        }}
      >
        <HeartImage selected={page} />
      </button>
    </Link>
  ) : (
    <Link to="/">
      <button
        className={"favoriteBtnSelected"}
        onClick={() => {
          setPage("home");
        }}
      >
        <HeartImage selected={page} />
      </button>
    </Link>
  );
}

export default FavoriteButton;
