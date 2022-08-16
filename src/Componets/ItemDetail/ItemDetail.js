import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';

const ItemDetail = ({ id, name, price, description, img, container, conservation, delivery, stock }) => {
    const [cantidadAñadir, setCantidadAñadir] = useState (0)

    const {agregarItem, getProductQuantity} = useContext (CartContext)

    const handleAgregar= (quantity) => {
        setCantidadAñadir (quantity)

        const itemToAdd = {
            id,name, price, quantity, img
        }

        agregarItem (itemToAdd)
    }

    const cantidadProducto = getProductQuantity(id)
    
    
    return (
                <Card >
                    <Card.Body className='bg-secondary text-light'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>${price}</Card.Text>
                        <Card.Text className='text-start'>{container}</Card.Text>
                        <Card.Text className='text-start'>{conservation}</Card.Text>
                        <Card.Text className='text-start'>{delivery}</Card.Text>
                        <div> {
                            cantidadAñadir === 0 ? (
                            <ItemCounter agregar={handleAgregar} stock={stock} initial={cantidadProducto}/>
                              ) : (
                                    <Link className='btn btn-outline-light' to= '/cart'>Finalizar compra</Link>
                              ) 
                            } 
                        </div>
                    </Card.Body>
                </Card>
    )
}

export default ItemDetail

