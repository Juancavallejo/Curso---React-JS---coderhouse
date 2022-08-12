import { createContext, useState } from "react"

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    const agregarItem = (itemToAdd) => {
        if (!isInCart(itemToAdd.id)) {
            setCart ([...cart, itemToAdd])
        } else {
            const cartUpdated = cart.map (prod => {
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

            setCart (cartUpdated)
        } 
    }

    const obtenerCantidad = () => {
        let acumulador = 0

        cart.forEach(item => {
            acumulador += item.quantity
        })

        return acumulador
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    } 

    const removeItem = (id) => {
        const newCartSinProduct = cart.filter (prod => prod.id !== id)
        setCart (newCartSinProduct)
    }

    return (
         <CartContext.Provider value={{cart, agregarItem, obtenerCantidad, isInCart, removeItem, clearCart, getProductQuantity }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
