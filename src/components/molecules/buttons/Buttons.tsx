import FavoriteButton from "../../atoms/favoriteButton/FavoriteButton";
import SignInButton from "../../atoms/signInButton/SignInButton";

function Buttons() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FavoriteButton />
      <SignInButton />
    </div>
  );
}

export default Buttons;
