import { useState } from "react";

const Counter = ({stock, addAlCarrito}) => {
    const [count, setCount] = useState (1)

    const aumentar = () => {
        if (count < stock) {
            setCount (count + 1)
        }
    }

    const disminuir = () => {
        if (count > 1) {
            setCount (count -1)
        }
    }

    return (
        <div>
            <h3> Productos para el carrito: {count}</h3>
            <button onClick={aumentar}> Aumentar productos del carrito</button>
            <button onClick={disminuir}> Retirar productos del carrito</button>
            <button onClick={() => addAlCarrito(count)}> Agregar al carrito </button>
        </div>
    )
}

export default Counter