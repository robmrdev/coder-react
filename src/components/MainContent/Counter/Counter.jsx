import { useState } from "react"
import "./Counter.css"


const Counter = ({stock, initial, addToCart}) => {
    const [counter, setCounter] = useState (initial)

    const addCounter = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decreaseCounter = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }


  return (
    <span className="counter">
        <div className="counterAmount">
            <i className="fi fi-br-minus-small" onClick={decreaseCounter}></i>
            <strong> {counter} </strong>
            <i className="fi fi-br-plus-small" onClick={addCounter}></i>
        </div>

        <button onClick={() => addToCart(counter)}> Add {counter} items to cart</button>
    </span>
  )
}

export default Counter