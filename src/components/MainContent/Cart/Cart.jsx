import CartItem from '../CartItem/CartItem'
import { useContext } from 'react'
import { CheckoutContext } from '../../../context/CheckoutContext'
import { Link } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {
    const { shoppingCart, emptyCart, total, totalAmount } = useContext(CheckoutContext);



    if (!shoppingCart) {
        return <div>Loading...</div>;
    }
    if (totalAmount === 0) {
        return (
            <main>
                <div className='mainContainer cartContainer'>
                    <h2>Cart Empty</h2>
                    <Link to="/">Home</Link>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div className='mainContainer cartContainer'>
                <h1>Shopping Cart</h1>
                <hr />
                <div className='orderItems'>

                    {shoppingCart.map((cartItem) => (
                        <CartItem key={cartItem.item.id} item={cartItem.item} amount={cartItem.amount} />
                    ))}
                </div>
                <div className='orderSummary'>
                    <strong>Order Summary</strong>
                    <div className='summaryContainer'>
                        <div className='cartTotal'>
                            <p>Amount of items</p>
                            <p>{totalAmount}</p>
                        </div>
                    <hr />
                        <div className='cartTotal'>
                            <strong>Total</strong>
                            <div className='priceContainer cartItemPrice'>
                                <i className="fi fi-br-euro"></i>
                                <h3>{total}.-</h3>
                            </div>
                        </div>
                        
                    <hr />
                        <p onClick={() => emptyCart()}> Empty Cart </p>
                        <Link to="/checkout" className='continueCheckout'>
                            <strong>Continue to Checkout</strong>
                            <i className="fi fi-br-angle-small-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart