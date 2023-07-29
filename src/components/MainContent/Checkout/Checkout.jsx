import { useState, useContext } from "react"
import { CheckoutContext } from "../../../context/CheckoutContext"
import { db } from "../../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'



const Checkout = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");
  const { shoppingCart, total, totalAmount, emptyCart } = useContext(CheckoutContext);
  const [hoveredId, setHoveredId] = useState(null);



  const formHandler = (e) => {
    e.preventDefault();


    if (!name || !lastName || !phone || !email || !emailConfirm) {
      setError("Please fill all the fields");
      return;
    }

    if (email !== emailConfirm) {
      setError("Email doesn't match");
      return;
    }

    const order = {
      items: shoppingCart.map(i => ({
        id: i.item.id,
        name: i.item.name,
        amount: i.amount
      })),
      total: total,
      date: new Date(),
      name,
      lastName,
      phone,
      email
    }
    Promise.all(
      order.items.map(async (itemOrder) => {
        const itemRef = doc(db, "products", itemOrder.id);

        const itemDoc = await getDoc(itemRef);
        const currentStock = itemDoc.data().stock;
        await updateDoc(itemRef, {
          stock: currentStock - itemOrder.amount,
        })
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then(
            docRef => {
              setOrderId(docRef.id);
              emptyCart()
            })
          .catch(error => {
            console.log("Error at create Order, try again", error);
            setError("Error on filling Order, Try Again");
          })
      })
      .catch(error => {
        console.log("Error at update stock, try again", error);
        setError("Error on update stock, Try Again");
      })
  }


  return (


    <main>
      <div className="mainContainer">
        <div className="cartContainer">
          <h1>CheckOut</h1>
          
          <hr />
          <form onSubmit={formHandler}>
            <div className="checkoutForm">
              <div>
                <label htmlFor=""> Name </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor=""> Last name </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div>
                <label htmlFor=""> Phone Number </label>
                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label htmlFor=""> Email </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor=""> Confirm email </label>
                <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
              </div>
            </div>

            {
              error && <p>{error}</p>
            }
            <div className="checkoutButtonContainer">
              <button type="submit" className="checkoutButton"> Finish </button>
            </div>
            <hr />
          </form>
          <div className='orderSummary checkoutSummary'>
            <strong>Order Summary</strong>
            <div>
              {
                shoppingCart.map(i => (
                    <img
                      src={hoveredId === i.item.id ? i.item.img[1] : i.item.img[0]}
                      alt={i.item.name}
                      onMouseEnter={() => setHoveredId(i.item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={hoveredId === i.item.id ? "hoverItemImg" : ""}
                    />
                ))
              }
            </div>
            <div className='summaryContainer'>
              <div className='cartTotal'>
                <p>Amount of items</p>
                <p>{totalAmount}</p>
              </div>
              <div className='cartTotal'>
                <p>Subtotal excluding TAX</p>
                <p>{(total-(total * 0.21)).toFixed(2)}</p>
              </div>
              <div className='cartTotal'>
                <p>TAX (21%) </p>
                <p>{(total * 0.21).toFixed(2)}</p>
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
            </div>
          </div>
        </div>
        {
          orderId && (
            <strong> Thanks for shooping with us! Your order Id is {orderId}</strong>
          )
        }
      </div>
    </main>
  )
}

export default Checkout