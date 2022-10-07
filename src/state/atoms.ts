import { atom } from "recoil";

export const toursState = atom({
  key: "toursState",
  default: [],
});

export const favoritesState = atom({
  key: "favoritesState",
  default: [],
});

export const pageState = atom({
  key: "pageState",
  default: "home",
});
