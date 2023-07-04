import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProductos, getProductosPorCategoria } from "../../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const {idCategory} = useParams ();

    useEffect (()=> {
      const funcion = idCategory ? getProductosPorCategoria : getProductos;
      funcion(idCategory)
      .then(res => setProductos(res))
    }, [idCategory])


    return (
        <main>
            <div className='mainContainer'>
                <h2 className='text-center m-4'> {greeting} </h2>
                <ItemList productos={productos} />
            </div>
        </main>
    );
};

export default ItemListContainer;