import React from 'react'


const ItemListContainer = ({greeting}) => {
  return (
    <main>     
        <h2 className='text-center m-4'> {greeting} </h2>   
    </main>
  )
}

export default ItemListContainer