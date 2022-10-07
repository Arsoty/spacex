import React from "react";
import MySwiper from "../../molecules/mySwiper/MySwiper";

const FavoriteCards = () => {
  return (
    <div style={{ width: "1700px", height: "600px", margin: "auto" }}>
      <MySwiper slides={3} />
    </div>
  );
};

export default FavoriteCards;
