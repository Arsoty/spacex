import React from "react";
import { TourType } from "../../../types/types";

interface ClearAllButtonInterface {
  setFavs: (clearedFavs: Array<TourType>) => void;
}

const ClearAllButton = ({ setFavs }: ClearAllButtonInterface) => {
  return (
    <button
      onClick={() => setFavs([])}
      style={{
        width: "200px",
        height: "80px",
        position: "relative",
        left: "1075px",
        top: "150px",
        border: "none",
        background: "none",
        cursor: "pointer",
        zIndex: "50",
        color: "#556B84",
        fontFamily: "Lato",
        fontWeight: "300",
        fontSize: "24px",
      }}
    >
      Clear all
    </button>
  );
};

export default ClearAllButton;
