import Logo from "../../atoms/logo/Logo";
import Buttons from "../../molecules/buttons/Buttons";
import Navigation from "../../molecules/navigation/Navigation";

function Header() {
  return (
    <header
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgba(30, 30, 30, 0.48)",
      }}
    >
      <Logo />
      <Navigation />
      <Buttons />
    </header>
  );
}

export default Header;
