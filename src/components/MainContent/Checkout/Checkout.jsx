import { useState, useContext } from "react"
import { CheckoutContext } from "../../../context/CheckoutContext"
import { db } from "../../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";



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
      <h2>CheckOut</h2>
      <form onSubmit={formHandler}>
        {
          shoppingCart.map(i => (
            <div key={i.item.id} className="checkOutItem">
              <img
                src={hoveredId === i.item.id ? i.item.img[1] : i.item.img[0]}
                alt={i.item.name}
                onMouseEnter={() => setHoveredId(i.item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={hoveredId === i.item.id ? "hoverItemImg" : ""}
              />
              <p>{i.item.name} x {i.amount}</p>
              <p>Price: {i.item.price}</p>
              <hr />
            </div>
          ))
          
        }
        <hr />
        
        <p>Total Amount: {totalAmount} </p>

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

        {
          error && <p>{error}</p>
        }
        <button type="submit"> Finish </button>
      </form>
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