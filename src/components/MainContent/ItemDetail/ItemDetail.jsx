import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id,img, name, price, description, hoverImg, idCat}) => {
  return (
    <main>
        <div className='itemDetail'>
            <h2>Nombre: {name} </h2>
            <h3>Price: {price} </h3>
            <p>{description}</p>
            <img src={img} alt={name} />
        </div>
    </main>
  )
}

export default ItemDetail