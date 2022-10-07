import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import PopularTours from "../popularTours/PopularTours";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ArrowButton from "../../atoms/arrowButton/ArrowButton";
import "swiper/css";
import "swiper/css/pagination";
import FavoriteTours from "../favoriteTours/FavoriteTours";
import { pageState, toursState, favoritesState } from "../../../state/atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import ClearAllButton from "../../atoms/clearAllButton/ClearAllButton";
import { gql, useQuery } from "@apollo/client";
import { TourType } from "../../../types/types";

interface SwiperProps {
  slides: number;
}

const MySwiper: React.FC<SwiperProps> = ({ slides }) => {
  const [tours, setTours] = useRecoilState(toursState);

  const GET_DATA = gql`
    query GetData {
      histories {
        flight {
          links {
            flickr_images
          }
          mission_name
          rocket {
            rocket_name
          }
        }
        id
        title
      }
    }
  `;

  const { data } = useQuery(GET_DATA);
  setTours(data?.histories);
  const page = useRecoilValue(pageState);
  const [favorites, setFavorites] = useRecoilState(favoritesState);
  const [dataToCard, setDataToCard] = useState<Array<TourType>>([]);

  useEffect(() => {
    if (page === "home") {
      setDataToCard(tours);
    } else {
      setDataToCard(favorites);
    }
  }, [page, tours, favorites]);

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
      slidesPerView={slides}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          top: "-1000px",
          left: "-270px",
        }}
      >
        {page === "home" ? <PopularTours /> : <FavoriteTours />}
        <ArrowButton />
        {page === "favs" ? (
          <ClearAllButton setFavs={() => setFavorites([])} />
        ) : (
          <></>
        )}
      </div>
      {dataToCard
        ?.filter(
          (el: TourType) => el.flight && el.flight?.links?.flickr_images?.length
        )
        .map((el: TourType) => (
          <SwiperSlide>
            <Card tour={el} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MySwiper;
