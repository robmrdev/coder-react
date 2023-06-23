import React from 'react';
import Counter from '../Counter/Counter';
import Promises from '../Promises/Promises';
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) => {
  return (
    <main>
      <span className='mainContainer'>
        <h2 className='text-center m-4'> {greeting} </h2> 
        <Counter stock={10} initial={1}/>   
        <Promises/>
      </span>     
    </main>
  )
}

export default ItemListContainer