import React from 'react'
import SellIcon from '@mui/icons-material/Sell';
import { useContext } from 'react';
import { CartContext } from './Cart';
const Items=({id,imgsrc,title,para,stars,lecture,quantity,price})=> {
  const {removeItem,increment,decrement} = useContext(CartContext);
    return (
    <>
    <div className="items-info">
    <div className="product-img">
      <img src={imgsrc} alt="image" />
    </div>
    <div className="title">
      <h2>{title}</h2>
      <p >{para}</p>
      <p className='stars'>{stars}</p>
      <p className='all'>{lecture}</p>
    </div>
    {/* <div className="add-minus-quantity">
    <i className="fa-solid fa-minus minus"onClick={()=>decrement(id)}></i>
      <input type="text" placeholder={quantity} />
      <i className="fa-solid fa-plus add" onClick={()=>increment(id)}></i>
    </div>

    <div className="price1">
      <h3>₹ {price}</h3>
      <SellIcon className='sellicon'/>
    </div>*/}
    <div className="remove-item">
      <p className=" remove"onClick={()=>removeItem(id)}>remove</p>
    </div>
  </div>
  <hr/>
    </>
  )
}

export default Items