import React from "react";
import { useState } from "react";
import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({ id, img, name, price, description }) => {
  const [hoveredId, setHoveredId] = useState(null);


  return (
    <>
        <div className="itemCard" key={id}>
          <Link to={`/item/${id}`}>
            <img
              src={hoveredId === id ? img[1] : img[0]}
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
        </div>
    </>
  );
};

export default Item;

