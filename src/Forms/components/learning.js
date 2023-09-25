import React from "react";
import "./learning.css";
import { useNavigate } from "react-router-dom";
import c1 from "../C1.jpg";
import c2 from "../C2.jpg";
import c5 from "../C5.png";
import c6 from "../C6.png";
import c7 from "../C7.jpg";
import { Button } from "@material-ui/core";

const Learning = () => {

    const navigate = useNavigate();

  function handleClick1() {
    navigate("/dashboard");
  }
  function handleClick2() {
    navigate("/courses");
  }
  function handleClick3() {
    navigate("/learning");
  }
  function handleplayList() {
    navigate("/playlist");
  }
  return (
    <div className="container">
      
          <section className="main-cart-section">
              <h1>Your Subscribed Courses</h1>
          
              <div className="cart-items">

                  <div className="cart-items-container">
                      <div className="items-info">
                        
                          <div className="product-img">
                              <img src={c1} alt="" />  
                          </div>
                          <div className="title">
                              <h3>JAVA PROGRAMMING</h3>
                          </div>
                          <div className="PlayList">
                <Button variant="contained" onClick={handleplayList}>
                  GO TO PLAYLIST
                </Button>
              </div>
                      </div>
                      <div className="items-info">
                          <div className="product-img">
                              <img src={c2} alt="" />  
                          </div>
                          <div className="title">
                              <h3>C++ PROGRAMMING</h3>
                          </div>
                      </div>
                      <div className="items-info">
                          <div className="product-img">
                              <img src={c5} alt="" />  
                          </div>
                          <div className="title">
                              <h3>WEB DEVELOPMENT</h3>
                          </div>
                      </div>
                      <div className="items-info">
                          <div className="product-img">
                              <img src={c6} alt="" />  
                          </div>
                          <div className="title">
                              <h3>REACT JS</h3>
                          </div>
                      </div>
                      <div className="items-info">
                          <div className="product-img">
                              <img src={c7} alt="" />  
                          </div>
                          <div className="title">
                              <h3>PYTHON PROGRAMMING</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          </div>
      
  )
};

export default Learning;






