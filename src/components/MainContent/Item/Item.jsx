import React from "react";
import { useState } from "react";
import "./Item.css"
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";

const Item = ({ id, img, name, price, description, hoverImg, Stock }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const handlerAmount = (amount) => {
    setAddItems (amount);
    console.log(amount + " added")
  }
  
  const [addItems, setAddItems] = useState (0);

  return (
    <>
        <div className="itemCard" key={id}>
          <Link to={`/item/${id}`}>
            <img
              src={hoveredId === id ? hoverImg : img}
              alt={name}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={hoveredId === id ? "hoverItemImg" : ""}
            />
          </Link>
          <strong className="itemName">{name}</strong>
          <p className="itemDescription">{description}</p>
          <strong className="itemPrice">€ {price}</strong>
          <div className="itemsButtons">
            <i className="fi fi-br-basket-shopping-simple"></i>
            <i className="fi fi-br-heart"></i>
          </div>
          {
              addItems > 0 ? (<Link to="/cart"> Go to CheckOut</Link>) : (<Counter initial={1} stock={Stock} addToCart={handlerAmount}/>)
            }
        </div>
    </>
  );
};

export default Item;

