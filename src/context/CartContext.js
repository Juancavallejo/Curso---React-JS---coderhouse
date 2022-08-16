import { createContext, useState } from "react"

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cartItems, setItemsCart] = useState ([])

    const agregarItem = (itemToAdd) => {
        if (!isInCart(itemToAdd.id)) {
            setItemsCart ([...cartItems, itemToAdd])
        } else {
            const cartUpdated = cartItems.map (prod => {
                if (prod.id === itemToAdd.id){
                    const productUpdated = {
                        ...prod,
                        quantity: itemToAdd.quantity
                    } 
                    return productUpdated
                } else {
                    return prod
                }
            })

            setItemsCart (cartUpdated)
        } 
    }

    const obtenerCantidad = () => {
        let acumulador = 0

        cartItems.forEach(item => {
            acumulador += item.quantity
        })

        return acumulador
    }

    const getProductQuantity = (id) => {
        const product = cartItems.find(prod => prod.id === id)

        return product?.quantity
    }

    const clearCart = () => {
        setItemsCart([])
    }

    const isInCart = (id) => {
        return cartItems.some(prod => prod.id === id)
    } 

    const removeItem = (id) => {
        const newCartSinProduct = cartItems.filter (prod => prod.id !== id)
        setItemsCart (newCartSinProduct)
    }

    return (
         <CartContext.Provider value={{cartItems, agregarItem, obtenerCantidad, isInCart, removeItem, clearCart, getProductQuantity }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
