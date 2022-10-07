import NavigationItem from "../../atoms/navigationItem/NavigationItem";
import { Link } from "react-router-dom";
import { pageState } from "../../../state/atoms";
import { useRecoilState } from "recoil";

function Navigation() {
  const [page, setPage] = useRecoilState(pageState);

  return (
    <div style={{ display: "flex", flexDirection: "row" }} className={page}>
      <Link onClick={() => setPage("home")} to="/">
        <NavigationItem text={"Home"} />
      </Link>
      <NavigationItem text={"Tours"} />
      <NavigationItem text={"About"} />
      <NavigationItem text={"Help"} />
    </div>
  );
}

export default Navigation;
