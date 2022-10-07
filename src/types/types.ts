export type LinkType = {
  __typeName: string;
  flickr_images: Array<string>;
};

export type RocketType = {
  __typeName: string;
  rocket_name: string;
};

export type FlightType = {
  __typeName: string;
  mission_name: string;
  links: LinkType;
  rocket: RocketType;
};

export type TourType = {
  __typeName: string;
  id: string;
  title: string;
  flight: FlightType;
};
