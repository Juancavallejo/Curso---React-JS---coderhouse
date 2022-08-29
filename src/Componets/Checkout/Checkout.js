import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import FormContext from "../../context/FormContext";
import { dataBase } from "../../services/firebase/index";
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Container} from "react-bootstrap";
import './Checkout.css'
import ItemRecap from "../ItemRecap/ItemRecap";
import Formulario from "../Formulario/Formulario";
import Swal from "sweetalert2";

const Checkout = () => {
    const [cargando, setCargando] = useState(false)
    const { carritoDeCompras, obtenerCantidad, limpiarCarrito, precioTotal } = useContext(CartContext)
    const {nombre,email,contacto,dirección,ciudad} = useContext (FormContext)

    const cantidadtotal = obtenerCantidad()
    const backToHome = useNavigate()

    const createOrder = async () => {
        setCargando(true)
        try {
            const objOrder = {
                comprador: {
                    nombre: `${nombre}`,
                    email: `${email}`,
                    contacto: `${contacto}`,
                    dirección: `${dirección}`,
                    ciudad: `${ciudad}`,
                },

                items: carritoDeCompras,
                cantidadtotal,
                precioTotal,
                date: new Date()
            }

            const itemsEnCarrito = carritoDeCompras.map(item => item.id)

            const itemsReferencia = collection(dataBase, 'items')

            const itemsFromFirestore = await getDocs(query(itemsReferencia, where(documentId(), 'in', itemsEnCarrito)))

            const { docs } = itemsFromFirestore

            const itemSinStock = []

            const batch = writeBatch(dataBase)

            docs.forEach(document => {
                const dataDocument = document.data()
                const stockDataBase = dataDocument.stock

                const itemsAddedCart = carritoDeCompras.find(item => item.id === document.id)
                const cantidadItems = itemsAddedCart?.quantity

                if (stockDataBase >= cantidadItems) {
                    batch.update(document.ref, { stock: stockDataBase - cantidadItems })
                } else {
                    itemSinStock.push({ id: document.id, ...dataDocument })
                }
            })

            if (itemSinStock.length === 0) {
                await batch.commit()

                const orderRef = collection(dataBase, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                Swal.fire({
                    title: `Gracias ${nombre} por su compra, el comprobante de su orden es: ${orderAdded.id}. 
                    toda la información será enviada a su correo electronico`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 6000
                  })
                limpiarCarrito()
                setTimeout(() => {
                    backToHome('/')
                }, 6000)

            } else {
                console.log(` el producto no tiene suficientes unidades`)
            }
        } catch (error) {
            console.log('Fallo de las peticiones')
        } finally {
            setCargando(false)
        }

    }

    if (cargando) {
        return <h2 className="mainContainer"> se está generando tu orden</h2>
    }

    return (
        <Container className="d-flex justify-content-center mainContainer">
            <div>
                <h2 className="m-4"> Información de envio:</h2>
                <div className='border rounded border-3 border-dark'>
                    {carritoDeCompras.map (prod => <ItemRecap key= {prod.id} {...prod} />)}
                    <h5 className="text-end mt-2 mx-2"> Gran total: {precioTotal}</h5>
                </div>
                <Formulario/>
                <button className='btn btn-success' onClick={createOrder}> Generar Order</button>
            </div>
        </Container>

    )
}

export default Checkout

