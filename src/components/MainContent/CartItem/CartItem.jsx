import React from 'react'
import { useContext } from 'react'
import { CheckoutContext } from '../../../context/CheckoutContext'

const CartItem = ({item, amount}) => {
    const {deleteProduct} = useContext (CheckoutContext)



    // const imgHandler = item.img;

    // const itemImg = imgHandler[1]


    

    //   const reduceStock = async (item) => {
    //     const itemRef  = doc(db, "products", item.id);
    //     const newStock = item.stock -1;

    //     await updateDoc(itemRef, {stock:newStock});

    // }

    console.log(img)

  return (
    <div>
{/*         
        {itemImg} */}
        <p> {item.img[1]}</p>
        <p> Amount: {amount} </p>
        <p> Price: {item.price}</p>
        <p> Id: {item.id}</p>
        <button onClick={() => deleteProduct(item.id)}>Delete</button>
        <hr />
    </div>
  )
}

export default CartItem