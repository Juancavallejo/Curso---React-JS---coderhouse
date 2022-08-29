import { createContext, useState } from "react"

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [carritoDeCompras, setCarritoDeCompras] = useState([])

    const agregarItem = (itemParaAñadir) => {
        if (!isInCart(itemParaAñadir.id)) {
            setCarritoDeCompras([...carritoDeCompras, itemParaAñadir])
        } else {
            setCarritoDeCompras(
                carritoDeCompras.map(
                    prod => prod.id === itemParaAñadir.id ? 
                    {...prod, quantity: itemParaAñadir.quantity} 
                    : prod 
                    )
            )
        }
    }

    const obtenerCantidad = () => {
        let acumulador = 0

        carritoDeCompras.forEach(item => {
            acumulador += item.quantity
        })

        return acumulador
    }

    const obtenerCantidadDeProductos = (id) => {
        const product = carritoDeCompras.find(prod => prod.id === id)

        return product?.quantity
    }

    const limpiarCarrito = () => {
        setCarritoDeCompras([])
    }

    const isInCart = (id) => {
        return carritoDeCompras.some(prod => prod.id === id)
    }

    const precioTotal = carritoDeCompras?.reduce(
        (previo, actual) => previo + actual.quantity * actual.price, 0
    )

    const eliminarItem = (id) => {
        setCarritoDeCompras(carritoDeCompras.filter((prod) => prod.id !== id))
    }

    return (
        <CartContext.Provider value={{ carritoDeCompras, agregarItem, obtenerCantidad, isInCart, eliminarItem, limpiarCarrito, obtenerCantidadDeProductos, precioTotal }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
