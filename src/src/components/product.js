import React, { useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Product(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlesubscribe() {
    dispatch({
      type: "subscribe",
      payload: {
        title: props.title,
        desc: props.para,
        stars: props.stars,
        lecture: props.lecture,
      },
    });
    // navigate("/cart");
  }
  function handleexplore() {
    navigate("/explore");
  }
  return (
    <>
      <div className="cards">
        <div className="card1">
          <img src={props.imgsrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.para}</h3>
            <p className="explore" onClick={handleexplore}>
              Explore
            </p>
            <a href="" target="_blank" />
            <button className="subs" onClick={handlesubscribe}>
              Subscribe Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
