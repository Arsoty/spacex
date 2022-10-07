import { MutableRefObject } from "react";
import Arrow from "../../atoms/arrow/Arrow";

interface ExploreToursInterface {
  // refs: MutableRefObject<HTMLDivElement>;
  refs: MutableRefObject<any>;
}

function ExploreTours({ refs }: ExploreToursInterface) {
  const scrollToTours = (): void => {
    refs.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "214px",
        paddingLeft: "60px",
      }}
    >
      <div
        style={{
          color: "white",
          fontFamily: "Lato",
          fontSize: "32px",
          fontWeight: "300",
          textShadow: `4px 3px 5px rgba(0, 0, 0, 0.94), 1px 0 1px black, 
				                                                0 1px 1px black, 
				                                                -1px 0 1px black, 
				                                                0 -1px 1px black`,
          cursor: "pointer",
        }}
        onClick={() => {
          scrollToTours();
        }}
      >
        Explore tours
      </div>
      <Arrow />
    </div>
  );
}

export default ExploreTours;
