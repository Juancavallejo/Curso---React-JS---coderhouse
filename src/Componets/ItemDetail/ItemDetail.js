import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';
import { Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ItemDetail = ({ id, name, price, description, img, container, delivery, stock }) => {
    const { agregarItem, obtenerCantidadDeProductos } = useContext(CartContext)

    const [cantidadAñadir, setCantidadAñadir] = useState(0)

    const handleAgregar = (quantity) => {
        setCantidadAñadir(quantity)

        const itemParaAñadir = {
            id, name, price, quantity, img
        }

        agregarItem(itemParaAñadir)
        Swal.fire({
            title: `Se agregó ${quantity} ${name} al carrito`,
            position: 'bottom-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000
          })
    }

    const cantidadProductos = obtenerCantidadDeProductos(id)


    return (
        <Card>
            <Card.Body className='bg-secondary text-light' style={{ width: '55rem' }}>
                <Card.Title>{name}</Card.Title>
                <Row>
                    <Col md={7}>
                        <Card.Img className='imgDetail' variant="top" src={img} />
                    </Col>
                    <Col md={5} >
                        <div>
                            <Card.Text className='my-5 fs-6 text-start'>{description}</Card.Text>
                        </div>
                        <div>
                            <Card.Text className='fs-6 text-start'>{container}</Card.Text>
                        </div>
                    </Col>
                </Row>
                <Card.Text className='pt-2 fs-5'>Tiene un costo de ${price} por unidad</Card.Text>
                <Card.Text className='text-start'>{delivery}</Card.Text>
                <div> {
                    cantidadAñadir === 0 ? (
                        <ItemCounter agregarItem={handleAgregar} stock={stock} inicial={cantidadProductos} />
                    ) : (
                        <Link className='btn btn-success' to='/cart'>Ir al carrito de compras</Link>
                    )
                }
                </div>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail

