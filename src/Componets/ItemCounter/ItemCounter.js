import { useState } from "react";
import './ItemCounter.css'
import Container from 'react-bootstrap/Container';

const ItemCounter = ({ stock = 0, inicial = 1, agregarItem }) => {
    const [count, setCount] = useState(inicial)

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
            {stock !== 0 &&
                <Container>
                    <div className="counterBtn">
                        <button className='btn btn-light m-3' onClick={disminuir}> -</button>
                        <h4>{count}</h4>
                        <button className='btn btn-light m-3' onClick={aumentar}> +</button>
                    </div>
                    <div>
                        <button className='btn btn-success mb-4' onClick={() => agregarItem(count)}> Agregar al carrito </button>
                    </div>
                </Container>
            }
            {stock === 0 && <h4 className="text-warning"> Lo sentimos, actualmente no tenemos stock de este producto. Si deseas vuelve a intentar tu compra en los proximos dias.</h4>}

        </div>

    )
}

export default ItemCounter