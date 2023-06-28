// import React from 'react'

// const ItemList = () => {
//   return (
//     <div>ItemList</div>
//   )
// }
import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({productos}) => {
        return (
            <div>
                {productos.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>
        )
    }

export default ItemList
