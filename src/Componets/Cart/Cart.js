import { useContext} from "react"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const { carritoDeCompras, limpiarCarrito, precioTotal } = useContext(CartContext);

    const total = precioTotal

    return (
        <div className="mainContainer">
            <h2 className="my-4"> Tu carrito de compras: </h2>
            <div>
                <div>
                    {carritoDeCompras.length === 0 ?
                        <p>Tu carrito está vacio, te invitamos a regresar a la pagina principal por si deseas ver o agregar un nuevo.
                            <Link className='btn btn-outline-dark mx-1' to='/'>Volver al E-commerce</Link></p>
                        :
                        <div className="itemContainer"> {carritoDeCompras.map(item => <ItemCart key={item.id} {...item} />)}
                            <div>
                                <h3> Total: ${total}</h3>
                            </div>
                             <div>
                                <button className="btn btn-warning m-2" onClick={() => limpiarCarrito()}>Limpiar carrito</button>
                                <Link className='btn btn-success m-2' to='/checkout'>Finalizar compra</Link>
                            </div>
                        </div>
                    }

                </div>
            </div>


        </div>

    )
}

export default Cart