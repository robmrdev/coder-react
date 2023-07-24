import { useState } from "react"
import { useEffect } from "react"
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
    <div className="counter">
        <button onClick={decreaseCounter}> - </button>
        <strong> {counter} </strong>
        <button onClick={addCounter}> + </button>

        <button onClick={() => addToCart(counter)}> Add to Cart</button>
    </div>
  )
}

export default Counter