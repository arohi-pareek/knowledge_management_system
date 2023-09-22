import React from "react";
import "./learning.css";
import { useNavigate } from "react-router-dom";
import c1 from "../C1.jpg";
import c2 from "../C2.jpg";
import c5 from "../C5.png";
import c6 from "../C6.png";
import c7 from "../C7.jpg";

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
  return (
    <div className="container">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                class="nav-item nav-link active"
                href="#"
                onClick={handleClick1}
              >
                Dashboard
              </a>
              <a class="nav-item nav-link" href="#" onClick={handleClick2}>
                Courses
              </a>
              <a class="nav-item nav-link " href="#" onClick={handleClick3}>
                My Learning
              </a>
            </div>
          </div>
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav> */}
      {/* <header>
      <div className="continue-shopping">
          <img src="./arrow.png" alt="arrow" className="arrow-icon" onClick={handleClick2}/>
          <h3>Subscribe More!</h3>
      </div>
  </header>
      */}
          <section className="main-cart-section">
              <h1>SUBSCRIBED COURSES</h1>
          
              <div className="cart-items">

                  <div className="cart-items-container">
                      <div className="items-info">
                          <div className="product-img">
                              <img src={c1} alt="" />  
                          </div>
                          <div className="title">
                              <h3>JAVA PROGRAMMING</h3>
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






