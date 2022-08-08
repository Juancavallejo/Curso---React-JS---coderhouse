import { useState } from "react";

const ItemCounter = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial)

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const disminuir = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div>
                <button onClick={disminuir}> -</button>
                <h4>{count}</h4>
                <button onClick={aumentar}> +</button>
            </div>
            <div>
                <button onClick={() => onAdd (count)}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCounter