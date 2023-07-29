import React from 'react'
import { useContext, useState } from 'react'
import { CheckoutContext } from '../../../context/CheckoutContext'
import './CartItem.css'

const CartItem = ({ item, amount }) => {
  const { deleteProduct, addProduct } = useContext(CheckoutContext);

  const handleIncrement = () => {
    addProduct(item, 1);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      addProduct(item, -1);
    }
  };

  return (
    <>
      <div className='cartItem'>
        <div className='cartItemImg'>
          <img src={item.img[0]} alt={item.name} />
          <strong> {item.id} </strong>
        </div>
        <div className='cartItemInfo'>

          <div className='cartItemDesc'>
            <strong className='cartItemName'> {item.name} </strong>
            <p> {item.idCat} </p>
            <p> {item.description} </p>
            <p className='priceContainer'><i className="fi fi-br-euro"></i>{item.price}.- /each</p>
          </div>


          <div className='priceContainer cartItemPrice'>
            <i className="fi fi-br-euro"></i>
            <h3>{item.price * amount}.-</h3>
          </div>

          <div className='itemOptions'>
            <span className="counter">
              <div className="counterAmount">
                <i className="fi fi-br-minus-small" onClick={handleDecrement}></i>
                <strong> {amount} </strong>
                <i className="fi fi-br-plus-small" onClick={handleIncrement}></i>
              </div>
            </span>
            <p onClick={() => deleteProduct(item.id)}>Remove product</p>
          </div>

        </div>
      </div>
      <hr />
    </>
  )
}

export default CartItem