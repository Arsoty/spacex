import spacexLogo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { pageState } from "../../../state/atoms";
import { useRecoilState } from "recoil";

function Logo() {
  const [page, setPage] = useRecoilState(pageState);

  return (
    <Link to="/">
      <img
        onClick={() => setPage("home")}
        src={spacexLogo}
        style={{ height: "42px", width: "229px" }}
        alt={page}
      ></img>
    </Link>
  );
}

export default Logo;
