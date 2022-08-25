import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { dataBase } from "../../services/firebase";
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import './Checkout.css'
import ItemRecap from "../ItemRecap/ItemRecap";


const Checkout = () => {
    const [cargando, setCargando] = useState(false)
    const { cartItems, obtenerCantidad, clearCart, precioTotal } = useContext(CartContext)
    const cantidadtotal = obtenerCantidad()
    const backToHome = useNavigate()

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contacto, setContacto] = useState('')
    const [dirección, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')

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


                items: cartItems,
                cantidadtotal,
                date: new Date()
            }

            const idsItemsEnCart = cartItems.map(item => item.id)

            const itemsReferencia = collection(dataBase, 'items')

            const itemsFromFirestore = await getDocs(query(itemsReferencia, where(documentId(), 'in', idsItemsEnCart)))

            const { docs } = itemsFromFirestore

            const itemSinStock = []

            const batch = writeBatch(dataBase)

            docs.forEach(document => {
                const dataDocument = document.data()
                const stockDataBase = dataDocument.stock

                const itemsAddedCart = cartItems.find(item => item.id === document.id)
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

                console.log(`El ID de su orden es: ${orderAdded.id}`)
                clearCart()
                setTimeout(() => {
                    backToHome('/')
                }, 3000)

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
        return <h2> se está generando tu orden</h2>
    }


    return (
        <Container className="d-flex justify-content-center mainContainer">
            <div>
                <h2 className="m-4"> Información de envio:</h2>
                <div className='border rounded border-3 border-dark'>
                    {cartItems.map (prod => <ItemRecap key= {prod.id} itemRecap={prod} />)}
                    <h5 className="text-end mt-2 mx-2"> Gran total: {precioTotal}</h5>
                </div>
                <Form className="bg-light formContainer border rounded border-3 border-dark p-3 m-5">
                    <h4>Datos de contacto </h4>
                    <Row>
                        <Col md={8}>
                            <div>
                            <label className="d-block">Nombre</label>
                             <input className="form-control" placeholder='Nombre completo' type={'text'} id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </div>
                           
                        </Col >
                        <Col md={4}>
                            <div>
                            <label className="d-block">Numero de contacto</label>
                            <input className="border form-control" placeholder='Numero de contacto' type={'number'} id="contacto" name="contacto" value={contacto} onChange={(e) => setContacto(e.target.value)} />
                            </div>
                        </Col>
                        <Col className="my-4" md={8}>
                            <div>
                            <label className="d-block">Correo electronico</label>
                            <input className="border form-control" placeholder='Correo electronico' type={'email'} id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={8}>
                        <div>
                            <label className="d-block">Dirección</label>
                            <input  className="border form-control" placeholder='Dirección' type={'address'} id="dirección" name="dirección" value={dirección} onChange={(e) => setDireccion(e.target.value)} />
                            </div>
                        </Col>
                        <Col md={4}>
                        <div>
                            <label className="d-block">Ciudad/Departamento</label>
                            <input className="border form-control" placeholder='Ciudad/Departamento' type={'text'} id="ciudad" name="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                            </div>
                        </Col>
                    </Row>
                </Form>
                <button className='btn btn-success' onClick={createOrder}> Generar Order</button>
            </div>
        </Container>

    )
}

export default Checkout

