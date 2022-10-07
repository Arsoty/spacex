import { useState } from "react";
import HeartImage from "../heartImage.tsx/HeartImage";
import "./AddToFavoritesButton.css";
import { favoritesState, pageState } from "../../../state/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { TourType } from "../../../types/types";

interface AddToFavoritesButtonProps {
  tour: TourType;
}

function AddToFavoritesButton({ tour }: AddToFavoritesButtonProps) {
  const page = useRecoilValue(pageState);
  const [favorites, setFavorites] = useRecoilState(favoritesState);
  const [selected, setSelected] = useState<boolean>(false);

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
      className={
        isTourInFavorites(favorites, tour)
          ? "favoriteBtnSelected"
          : "favoriteBtn"
      }
      onClick={() => {
        setSelected(!selected);
        changeFavorites();
      }}
    >
      <HeartImage selected={page} />
    </button>
  );
}

export default AddToFavoritesButton;
