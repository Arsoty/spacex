import BuyButton from "../../atoms/buyButton/BuyButton";
import AddToFavoritesButton from "../../atoms/addToFavoritesButton/AddToFavoritesButton";
import { pageState } from "../../../state/atoms";
import { useRecoilValue } from "recoil";
import DeleteButton from "../../atoms/deleteButton/DeleteButton";
import { TourType } from "../../../types/types";

interface CardInterface {
  tour: TourType;
}

function Card({ tour }: CardInterface) {
  const page = useRecoilValue(pageState);

  return (
    <div style={{ width: "500px", height: "750px" }}>
      <div
        style={{
          width: "500px",
          height: "600px",
          marginTop: "200px",
          border: "1px solid #D3EAFF",
        }}
      >
        <img
          src={tour.flight?.links?.flickr_images[0]}
          style={{ height: "300px", width: "500px" }}
          alt="img"
        ></img>
        <div style={{ height: "100px", paddingTop: "20px" }}>
          <div
            style={{
              textAlign: "center",
              paddingTop: "20px",
              fontFamily: "Syne, sans-serif",
              fontWeight: "700",
              fontSize: "24px",
              transform: "scale(1.3,1)",
            }}
          >
            {tour.title}
          </div>
          <div
            style={{
              width: "300px",
              margin: "auto",
              textAlign: "center",
              paddingTop: "20px",
              fontFamily: "Lato",
              fontWeight: "300",
              fontSize: "24px",
              color: "#556B84",
            }}
          >
            {`${tour.flight.mission_name} ${tour.flight.rocket.rocket_name}`}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "100px",
          }}
        >
          <BuyButton />
          {page === "home" ? (
            <AddToFavoritesButton tour={tour} />
          ) : (
            <DeleteButton tour={tour} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
