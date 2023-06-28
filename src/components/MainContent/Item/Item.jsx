import React from "react";
import { useState } from "react";

const Item = ({ id, img, name, price, description, hoverImg }) => {
    
    // const [hoveredId, setHoveredId] = useState(null);

    return (
        <div>
            <img src={img} alt={name} />
            <h3>Nombre {name}</h3>
        </div>
    );
};

export default Item;




{/* <h2>Chairs</h2>
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
</div> */}