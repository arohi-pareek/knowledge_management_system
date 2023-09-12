import React, { useContext } from "react";

import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ContextCart = () => {
  const { item, clearCart, totalItems, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();
  function handlearrow() {
    navigate("/courses");
  }

  const subscribeArr = useSelector((state) => {
    return state.subReducer
  });

  console.log(subscribeArr)

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            src="./images/arrow.png"
            alt="arrow"
            className="arrow-icon"
            onClick={handlearrow}
          />
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItems}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>My Learning</h1>
        <p className="total-items">
          <span className="total-items-count">{totalItems}</span> Subscribed
          Courses
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        {/* <div className="card-total">
        <h3>Cart Total: </h3>
        <h2>₹ {totalAmount}</h2>
        <button>CheckOut</button>
       
      </div>
        <button className='clear-cart'onClick={clearCart}>Clear Cart</button>*/}
      </section>
    </>
  );
};

export default ContextCart;
