import React, { createContext,useEffect, useReducer } from "react";
import "./cart.css"
import {products} from './Products'
import { reducer } from "./reducer";
import ContextCart from "./ContextCart";
import cart from "../cart.png";
import Footer from "./Footer";
export const CartContext=createContext();
const intialState={
  item:products,
  // totalAmount:0,
  // totalItems:0,
}
const Cart = () => {
  const[state,dispatch]=useReducer(reducer,intialState)
  //to delete the individual elements from an cart
  const removeItem=(id)=>{

    return dispatch({
        type:"REMOVE_ITEM",
        payload:id,
      })
  };
  const ADD_TO_CART=(id)=>{

    return dispatch({
        type:"ADD_TO_CART",
        payload:id,
      })
  };
  //clear cart
  // const clearCart=()=>{
  //   return dispatch({type:"CLEAR_CART"});
  // };
  //increment the item
  // const increment=(id)=>{
  //   return dispatch({
  //     type:"INCREMENT",
  //     payload:id,
  //   });
  // };
  //decrement the item
  // const decrement=(id)=>{
  //   return dispatch({
  //     type:"DECREMENT",
  //     payload:id,
  //   });
  // };
  //we will use useEffect to update the date
  // useEffect(()=>{
  //    dispatch({type:"GET_TOTAL"});
    //  console.log("Awesome");
  

  // const [item,setItem]=useState(products);
  return (
    <>
    <CartContext.Provider value={{...state,removeItem,ADD_TO_CART}}>
       <ContextCart/>
    </CartContext.Provider>
    </>
  );
};

export default Cart;
