import { useState } from "react"


const Counter = ({stock, initial}) => {
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

    const addToCart = () => {
        console.log(`${counter} items added to cart`)
    }

  return (
    <>
    <button onClick={decreaseCounter}> - </button>
    <strong> {counter} </strong>
    <button onClick={addCounter}> + </button>

    <button onClick={addToCart}> Add to Cart</button>
    </>
  )
}

export default Counter