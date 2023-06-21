import React from 'react';
import Counter from '../Counter/Counter';


const ItemListContainer = ({greeting}) => {
  return (
    <main>     
        <h2 className='text-center m-4'> {greeting} </h2> 
        <Counter stock={10} initial={1}/>  
    </main>
  )
}

export default ItemListContainer