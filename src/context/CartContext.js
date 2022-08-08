import { createContext, useState } from "react"

const CartContext = createContext ()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart ([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map (prod => {
                if (prod.id === productToAdd.id){
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
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
        let accu = 0

        cart.forEach(prod => {
        accu += prod.quantity
        })

        return accu
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    } 

    const removeItem = (id) => {
        const newCartSinProduct = cart.filter (prod => prod.id !== id)
        setCart (newCartSinProduct)
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    return (
         <CartContext.Provider value={{cart, addItem, obtenerCantidad, isInCart, removeItem, clearCart, getProductQuantity }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
