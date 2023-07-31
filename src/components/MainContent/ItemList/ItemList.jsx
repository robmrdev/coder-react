
import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

const ItemList = ({products}) => {
    const [loading, SetLoading] = useState (true)
  
    useEffect (()=> {
      const loadingTimer = () => {
        setTimeout (()=>{
          SetLoading(false)
        },1000)
      }
      loadingTimer()
    },[])
    if (loading) return <Loading/>
        return (
            <div className="items">
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>
        )
    }

export default ItemList
