import React from 'react'
import { useState, useEffect } from 'react'

import { getDocs, collection, query, where, doc, updateDoc} from 'firebase/firestore'

import { db } from '../../../services/config'



const Test = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const myItems = query(collection(db, "products"));

        // const myItems =query(collection(db, "products"),where("price", ">", 30))

        getDocs(myItems)
        .then( resp => {
            setItems(resp.docs.map(doc=>({id:doc.id, ...doc.data()})))
        })
    },[items])

    const reduceStock = async (item) => {
        const itemRef  = doc(db, "products", item.id);
        const newStock = item.stock -1;

        await updateDoc(itemRef, {stock:newStock});

    }

  return (

    <div>
        <h2>Mis productos</h2>
        <div>
            {
                items.map(item => (
                    <div key={item.id}>
                        <img src={item.img[0]} alt="" />
                        <h3>name {item.name}</h3>
                        <p>price {item.price}</p>
                        <p>stock {item.stock}</p>
                        <button onClick={()=> reduceStock(item)}>Buy</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Test