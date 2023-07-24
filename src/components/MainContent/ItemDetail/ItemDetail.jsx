import React from 'react';
import "./ItemDetail.css";
import Counter from '../Counter/Counter';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../../../context/CheckoutContext';
import { useContext } from 'react';



const ItemDetail = ({id,img, name, price, description, hoverImg, idCat, Stock}) => {

  const [addItems, setAddItems] = useState (0);

  const {addProduct} = useContext (CheckoutContext);

  const handlerAmount = (amount) => {
    setAddItems (amount);
    // console.log(amount + " added")
    const item = {id, name, price};
    addProduct(item, amount);
  }

  return (
    <main>
        <div className='itemDetail'>
            <h2>Nombre: {name} </h2>
            <h3>Price: {price} </h3>
            <p>{description}</p>
            <img src={img} alt={name} />
            {
              addItems > 0 ? (<Link to="/cart"> Go to CheckOut</Link>) : (<Counter initial={1} stock={Stock} addToCart={handlerAmount}/>)
            }
        </div>
    </main>
  )
}

export default ItemDetail