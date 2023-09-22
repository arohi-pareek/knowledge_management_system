import React from 'react'
import c1 from "../C1.jpg";
import c2 from "../C2.jpg";
import c5 from "../C5.png";
import c6 from "../C6.png";
import c7 from "../C7.jpg";
import { Button } from "@material-ui/core";

const List = () => {
  return (
    <div className="container">
    
      
      <section className="main-cart-section">
        

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

  
  );
}

export default List