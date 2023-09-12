import React from 'react'
import { useNavigate } from "react-router-dom";
import "./cart.css";
import c1 from "../C1.jpg";

const Cart = () => {
    const navigate = useNavigate();

  function handleClick() {
    navigate("/courses");
  }
  return (
    <>
    <header>
        <div className="continue-shopping">
            <img src="./arrow.png" alt="arrow" className="arrow-icon" onClick={handleClick}/>
            <h3>Subscribe More!</h3>
        </div>
    </header>
       
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
                                <img src={c1} alt="" />  
                            </div>
                            <div className="title">
                                <h3>JAVA PROGRAMMING</h3>
                            </div>
                        </div>
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
                                <img src={c1} alt="" />  
                            </div>
                            <div className="title">
                                <h3>JAVA PROGRAMMING</h3>
                            </div>
                        </div>
                        <div className="items-info">
                            <div className="product-img">
                                <img src={c1} alt="" />  
                            </div>
                            <div className="title">
                                <h3>JAVA PROGRAMMING</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        
    </>
  )
}

export default Cart
