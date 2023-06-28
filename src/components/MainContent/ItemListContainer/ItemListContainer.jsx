import { useState, useEffect } from 'react';
import Counter from '../Counter/Counter';
import './ItemListContainer.css';
import { getProductos } from '../../../asyncmock'; 
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState ([]);

  useEffect( () => {
    getProductos ()
    .then (respuesta => getProductos(respuesta))
    .catch (error => console.log(error))
  }, [])
  return (
    <main>
      <span className='mainContainer'>
        <h2 className='text-center m-4'> {greeting} </h2> 
        <Counter stock={10} initial={1}/>  
      </span>     
      <ItemList productos={productos}/>
    </main>
  )
}

export default ItemListContainer