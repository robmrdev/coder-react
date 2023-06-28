import React from 'react'

const Promises = () => {
  const ItemCard = (state) => {
    return new Promise ((resolve, reject)  => {
      if (state) {
        resolve ("Promesa Cumplida");
      }else {
        reject ("Promesa No Cumplida");
      }
    })
  }
  ItemCard(true)
  .then(answer => console.log("Promesa Cumplida", answer))
  .catch(error=> console.log("Promesa Rechazada", error))
}

export default Promises