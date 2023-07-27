import CartItem from '../CartItem/CartItem'
import { useContext } from 'react'
import { CheckoutContext } from '../../../context/CheckoutContext'
import { Link } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {
    const { shoppingCart, emptyCart, total, totalAmount } = useContext(CheckoutContext);


    // const imgHandler = item.img;

    // const itemImg = imgHandler[1]



    if (!shoppingCart) {
        return <div>Loading...</div>; 
    }
    if (totalAmount === 0) {
        return (
            <main>
                <div className='cartContainer'>
                    <h2>Cart Empty</h2>
                    <Link to="/">Home</Link>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div className='cartContainer'>
                {shoppingCart.map(item => <CartItem key={item.id} {...item} />)}
                <h3> Total $ {total}</h3>
                <h3> Total Amount {totalAmount}</h3>
                <button onClick={() => emptyCart()}> Empty Cart </button>
                <Link to="/checkout"> Check Out</Link>
            </div>
        </main>
    )
}

export default Cart