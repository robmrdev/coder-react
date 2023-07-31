import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../../services/config";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null);
    const {idItem} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const newDoc = doc(db, "products", idItem);

        getDoc(newDoc)
        .then( res=> {
          const data =res.data();
          const newItem = {id: res.id, ...data}
          setProduct(newItem);
        })
        .catch(error => console.log(error))
        setLoading(false)
    }, [idItem])
if (loading) return <p>LOADING</p>
  return (
    <ItemDetail {...product}/>
  )
}

export default ItemDetailContainer