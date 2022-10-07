import heartImage from "../../../assets/heart.png";

interface HeartImageInterface {
  selected: string;
}

function HeartImage({ selected }: HeartImageInterface) {
  return selected === "favs" ? (
    <img
      src={heartImage}
      style={{ height: "24px", width: "24px", filter: "invert(100%)" }}
      alt="img"
    ></img>
  ) : (
    <img
      src={heartImage}
      style={{ height: "24px", width: "24px" }}
      alt="img"
    ></img>
  );
}

export default HeartImage;
