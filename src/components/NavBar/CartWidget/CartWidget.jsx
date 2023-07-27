import React from 'react';
import './CartWidget.css'
import { useContext } from 'react';
import { CheckoutContext } from '../../../context/CheckoutContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {totalAmount} = useContext(CheckoutContext);
  console.log(totalAmount)

  return (
    <div className='cartWidget'>
        <Link to="/cart">
          <i className="fi fi-br-basket-shopping-simple"></i>
          {
                    totalAmount > 0 && <div><p> {totalAmount} </p></div>
          }
        </Link>
        <div>
          
          
        </div>          
    </div>
    )
}

export default CartWidget