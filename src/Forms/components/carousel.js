import React, { useState } from "react";
import "../style/carousel.css";
import { images } from "../../helpers/carouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div className="left"
        onClick={() => {currImg > 0 && setCurrImg(currImg - 1);
        }}>
          <ArrowBackIosIcon style={{ fontSize: 40}}/>
        </div>
        <div className="center"></div>
        <div className="right"  
        onClick={() => {currImg < images.length - 1 && setCurrImg(currImg + 1);
        }}>
          <ArrowForwardIosIcon style={{ fontSize: 40}}/>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
