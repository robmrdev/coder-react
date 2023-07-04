import React from "react";
import { useState } from "react";
import "./Item.css"
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";

const Item = ({ id, img, name, price, description, hoverImg }) => {
  const [hoveredId, setHoveredId] = useState(null);

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
          <Counter stock={10} initial={1} />
        </div>
    </>
  );
};

export default Item;

{
  /* <h2>Chairs</h2>
<div className="items">
    {misProductos.map((chair) => (
        <div className="itemCard" key={chair.id}>
            <img
                src={hoveredId === chair.id ? chair.hoverImg : chair.img}
                alt={chair.name}
                onMouseEnter={() => setHoveredId(chair.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={hoveredId === chair.id ? "hoverItemImg" : ""}
            />
            <strong className="itemName">{chair.name}</strong>
            <p className="itemDescription">{chair.description}</p>
            <strong className="itemPrice">€ {chair.price}</strong>
            <div className="itemsButtons">
                <i className="fi fi-br-basket-shopping-simple"></i>
                <i className="fi fi-br-heart"></i>
            </div>
        </div>
    ))}
</div> */
}
