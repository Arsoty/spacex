import { useRef } from "react";
import space from "../../../assets/space.png";
import ExploreTours from "../../molecules/exploreTours/ExploreTours";
import Header from "../../organisms/header/Header";
import Main from "../../organisms/main/Main";
import Tours from "../../organisms/tours/Tours";

function Home() {
  const ref = useRef(null);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${space})`,
          backgroundRepeat: "no-repear",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Header />
        <Main />
        <ExploreTours refs={ref} />
      </div>
      <Tours />
      <div ref={ref}></div>
    </div>
  );
}

export default Home;
