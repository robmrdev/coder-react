import React from 'react';
import "./ItemDetail.css";
import Counter from '../Counter/Counter';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../../../context/CheckoutContext';
import { useContext } from 'react';



const ItemDetail = ({id,img, name, price, description, idCat, stock}) => {

  const [addItems, setAddItems] = useState (0);
  const {addProduct} = useContext (CheckoutContext);

  const handlerAmount = (amount) => {
    setAddItems (amount);
    const item = {id, name, price};
    addProduct(item, amount);
  }

  const itemImg = Array.isArray(img) && img.length > 0 ? (
    img.map((imageUrl, index) => (
      <img key={index} src={imageUrl} alt={`Product ${name} - Image ${index}`} />
    ))
  ) : (
    <span>No images available</span>
  )

  return (
    <main>
        <div className='itemDetail'>
          <div className='itemDetalImgs'>


          {itemImg}


          </div>
          <div className='itemDetailInfo'>
            <div className='topInfoContainter'>
              <div className='nameDescContainer'>
                <h5>{name} </h5>
                <p>{description}</p>
              </div>
              <i className="fi fi-br-heart"></i>  
            </div>
            <div className='priceContainer'>
              <i className="fi fi-br-euro"></i>
              <h3>{price}.-</h3>
            </div>
            <p>How to get it</p>
            <span className='howToGetItContainter'>
              <span className='howToGetItComponent'>
                <span className='howToGetItWrapper'>
                  <i className="fi fi-bs-truck-side"></i>
                  <span className='howToGetItInfo'>
                    <h6>Delivery</h6>
                    <p>Enter your postcode to check home delivery availability</p>
                  </span>
                </span>
                <i className="fi fi-br-angle-small-right"></i>
              </span>
              <span className='howToGetItLine'>
              </span>
              <span className='howToGetItComponent'>
                <span className='howToGetItWrapper'>
                  <i className="fi fi-bs-warehouse-alt"></i>
                  <span className='howToGetItInfo'>
                    <h6>In Store</h6>
                    <p>Check in-store stock</p>
                  </span>
                </span>
                <i className="fi fi-br-angle-small-right"></i>
              </span>
            </span>
            {
              addItems > 0 ? (<><Counter initial={1} stock={stock} addToCart={handlerAmount}/><span className='counterDetails'><Link to="/cart"> Go to CheckOut</Link></span></>) : (<Counter initial={1} stock={stock} addToCart={handlerAmount}/>)
            }
          </div>
        </div>
    </main>
  )
}

export default ItemDetail