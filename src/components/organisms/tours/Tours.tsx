import "./Tours.css";
import MySwiper from "../../molecules/mySwiper/MySwiper";

function Tours() {
  return (
    <div style={{ width: "1700px", height: "600px", margin: "auto" }}>
      <MySwiper slides={3} />
    </div>
  );
}

export default Tours;
