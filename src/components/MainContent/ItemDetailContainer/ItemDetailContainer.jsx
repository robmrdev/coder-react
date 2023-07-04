import { useState, useEffect } from "react";
import { getUnProductos } from "../../../asyncmock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null);
    const {idItem} = useParams();

    useEffect (()=>{
        getUnProductos (idItem)
            .then(res => setProduct(res))
    },[idItem])


  return (
    <ItemDetail {...product}/>
  )
}

export default ItemDetailContainer