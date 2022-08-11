import { useState } from "react";
import './ItemCounter.css'
import Container from 'react-bootstrap/Container';

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
        <Container>
            <div className="counterBtn">
                <button className='btn btn-outline-light m-3' onClick={disminuir}> -</button>
                <h4>{count}</h4>
                <button className='btn btn-outline-light m-3' onClick={aumentar}> +</button>
            </div>
            <div>
                <button className='btn btn-outline-light mb-4' onClick={() => onAdd (count)}> Agregar al carrito </button>
            </div>
        </Container>
    )
}

export default ItemCounter