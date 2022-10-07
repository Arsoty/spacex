import "./ArrowButton.css";
import { useSwiper } from "swiper/react";

function ArrowButton() {
  const swiper = useSwiper();

  return (
    <div>
      <button onClick={() => swiper.slidePrev()} className="arrowBtnBack">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="arrowBtnForward">
        &gt;
      </button>
    </div>
  );
}

export default ArrowButton;
