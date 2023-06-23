import { useState } from "react"
import { useEffect } from "react"


const Counter = ({stock, initial}) => {
    const [counter, setCounter] = useState (initial)
    const [color, setColor] = useState ("lightgray")

    // useEffect( () => {
    //     document.title = `counter: ${counter}`;
    // }, [counter]
    // )

    useEffect( () => {
        if (counter>=5){
            setColor("gray");
        } else {
            setColor("lightgray");
        }
    } ,[counter]
    )

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

    <button onClick={addToCart} style={{backgroundColor:color}}> Add to Cart</button>
    </>
  )
}

export default Counter