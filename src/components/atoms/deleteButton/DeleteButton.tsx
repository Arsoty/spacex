import React from "react";
import "./DeleteButton.css";
import { favoritesState } from "../../../state/atoms";
import { useRecoilState } from "recoil";
import DeleteImage from "../deleteImage/DeleteImage";
import { TourType } from "../../../types/types";

interface DeleteButtonInterface {
  tour: TourType;
}

const DeleteButton = ({ tour }: DeleteButtonInterface) => {
  const [favorites, setFavorites] = useRecoilState(favoritesState);

  const isTourInFavorites = (
    favs: Array<TourType>,
    currTour: TourType
  ): boolean => {
    return !!favs.filter((el) => el.title === currTour.title).length;
  };

  const changeFavorites = (): void => {
    const newFavs: any = [...favorites];
    if (!isTourInFavorites(favorites, tour)) {
      newFavs.push(tour);
      setFavorites(newFavs);
    } else {
      setFavorites(newFavs.filter((el: TourType) => el.title !== tour.title));
    }
  };

  return (
    <button
      className="deleteBtn"
      onClick={() => {
        changeFavorites();
      }}
    >
      <DeleteImage />
    </button>
  );
};

export default DeleteButton;
