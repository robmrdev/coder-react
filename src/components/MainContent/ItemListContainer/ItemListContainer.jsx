import { useState, useEffect } from "react";
import "./ItemListContainer.css";
// import { getProductos, getProductosPorCategoria } from "../../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../../services/config";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { idCategory } = useParams();

    // useEffect (()=> {
    //   const funcion = idCategory ? getProductosPorCategoria : getProductos;
    //   funcion(idCategory)
    //   .then(res => setProductos(res))
    // }, [idCategory])

    useEffect(() => {
        const renderItems = idCategory ? query(collection(db, "products"), where("idCat", "==", idCategory)) : collection(db, "products");

        getDocs(renderItems)
        .then(res => {
            const newItems = res.docs.map( doc => { 
                const data = doc.data()
                return {id:doc.id, ...data}
            })
            setProducts(newItems);
        })
        .catch (error => console.log(error))
    }, [idCategory])


    return (
        <main>
            <div className='mainContainer'>
                <h2 className='text-center m-4'> {greeting} </h2>
                <ItemList products={products} />
            </div>
        </main>
    );
};

export default ItemListContainer;