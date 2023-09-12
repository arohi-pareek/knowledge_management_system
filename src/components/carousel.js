import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; //mui icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { images } from "../Helpers/carsouelData"; //Helpers folder for storing sliding images

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="Carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosNewIcon className="arrow2" style={{ fontsize: 30 }} />
        </div>
        <div className="center"></div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon className="arrow" style={{ fontsize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
