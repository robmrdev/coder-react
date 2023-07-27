import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../../services/config";
import { getDoc, doc } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null);
    const {idItem} = useParams();

    useEffect( () => {
        const newDoc = doc(db, "products", idItem);

        getDoc(newDoc)
        .then( res=> {
          const data =res.data();
          const newItem = {id: res.id, ...data}
          setProduct(newItem);
        })
        .catch(error => console.log(error))
    }, [idItem])

  return (
    <ItemDetail {...product}/>
  )
}

export default ItemDetailContainer