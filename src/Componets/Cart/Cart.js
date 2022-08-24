
import { useContext, useEffect, useState } from "react"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const [productsLength, setProductsLength] = useState(0);
    console.log(productsLength)

    const { cartItems, clearCart, precioTotal } = useContext(CartContext);

    useEffect(() => {
        setProductsLength(
            cartItems?.reduce((previo, actual) => previo + actual.quantity, 0)
        )
    }, [cartItems])


    const total = precioTotal

    return (
        <div className="mainContainer">
            <h2 className="my-4"> Tu carrito de compras: </h2>
            <div>
                <div>
                    {cartItems.length === 0 ?
                        <p>Tu carrito está vacio, te invitamos a regresar a la pagina principal por si deseas ver o agregar un nuevo.
                            <Link className='btn btn-outline-dark mx-1' to='/'>Volver al E-commerce</Link></p>
                        :
                        <div className="itemContainer"> {cartItems.map((item, id) => (<ItemCart key={id} item={item} />))}
                            <div>
                                <h3> Total: ${total}</h3>
                            </div>
                             <div>
                                <button className="btn btn-warning m-2" onClick={() => clearCart()}>Limpiar carrito</button>
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