 
import { useContext, useEffect, useState } from "react"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart";


 
 const Cart = () => {
    const [productsLength, setProductsLength] = useState (0);
    console.log (productsLength)

    const {cartItems} =useContext(CartContext); 
  
        useEffect (() => {
            setProductsLength (
                cartItems?.reduce ((previo, actual) => previo + actual.quantity, 0)
            )
        },[cartItems])


    const total =cartItems?.reduce (
        (previo, actual) => previo + actual.quantity * actual.price, 0
    )
    
    return (
        <div>
            <h2> Tu carrito </h2>
            {cartItems.length === 0 ? <p> Tu carrito está vacio</p> :
            <div> {cartItems.map ((item, i) => (
                <ItemCart key={i} item={item} />
                ))}
                </div>
            }
            <h3> Total: ${total}</h3>
        </div>

    )
 }

 export default Cart