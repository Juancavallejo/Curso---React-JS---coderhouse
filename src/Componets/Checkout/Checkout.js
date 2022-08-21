import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { dataBase } from "../../services/firebase";
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Checkout = () => {
    const [loading, setLoading] = useState (false)
    const {cartItems, obtenerCantidad, clearCart} = useContext(CartContext)
    const cantidadtotal = obtenerCantidad()
    const backToHome = useNavigate ()

    const [nombre, setNombre] = useState('')
    const [dirección, setDireccion] = useState('')
    
    const createOrder = async () => {
        setLoading (true)
        try {
            const objOrder = {
                comprador: {
                    nombre: `${nombre}`,
                    telefono: ' 312-282-9659',
                    dirección:`${dirección}`
                },

        
                items: cartItems,
                cantidadtotal,
                date: new Date ()
            }
            
            const idsItemsEnCart = cartItems.map(item => item.id)
    
            const itemsReferencia = collection (dataBase, 'items')
    
            const itemsFromFirestore = await getDocs(query(itemsReferencia, where (documentId(), 'in', idsItemsEnCart)))
    
            const {docs} = itemsFromFirestore
    
            const itemSinStock = []
    
            const batch = writeBatch (dataBase)
    
            docs.forEach(document => {
                const dataDocument = document.data ()
                const stockDataBase = dataDocument.stock
    
                const itemsAddedCart = cartItems.find (item => item.id === document.id)
                const cantidadItems = itemsAddedCart?.quantity
    
                if (stockDataBase >= cantidadItems) {
                    batch.update (document.ref, {stock:stockDataBase - cantidadItems })
                } else {
                    itemSinStock.push ({ id: document.id, ...dataDocument })
                }
            }) 
    
            if(itemSinStock.length === 0) {
                await batch.commit ()
    
                const orderRef = collection (dataBase, 'orders')
                const orderAdded = await addDoc (orderRef, objOrder)

                console.log (`El ID de su orden es: ${orderAdded.id}`)
                clearCart ()
                setTimeout ( () => {
                    backToHome ('/')
                }, 3000)
                
            } else {
                console.log (` el producto no tiene suficientes unidades`)
            }
        } catch (error) {
            console.log ('Fallo de las peticiones')
        } finally {
            setLoading (false)
        }

    }

    if (loading) {
        return <h2> se está generando tu orden</h2>
    }

    return (
        <Container>
        <div>
            <h2> Checkout</h2>
            <form>
                <label> Nombre</label>
                <input type={'text'} id="nombre" name="nombre" value={nombre} onChange={(e) =>setNombre(e.target.value)}/>
                <label> dirección</label>
                <input type={'text'} id="nombre" name="nombre" value={dirección} onChange={(e) =>setDireccion(e.target.value)}/>
            </form>
            <button className='btn btn-success' onClick={createOrder}> Generar Order</button>
        </div>
        </Container>

    )
}

export default Checkout

