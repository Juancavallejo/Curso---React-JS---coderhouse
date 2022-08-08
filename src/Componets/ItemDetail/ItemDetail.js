import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';

const ItemDetail = ({ id, name, price, description, img, container, conservation, delivery, stock }) => {
    const [cantidadAñadir, setCantidadAñadir] = useState (0)

    const {addItem, getProductQuantity} = useContext (CartContext)

    const handleOnAdd= (quantity) => {
        setCantidadAñadir (quantity)

        const productToAdd = {
            id,name, price, quantity
        }

        addItem (productToAdd)
    }

    const cantidadProducto = getProductQuantity(id)
    
    
    return (
                <Card >
                    <Card.Body className='bg-secondary text-light'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Img variant="top" src={img} style={{ width:'50rem', height:'26rem' }}/>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>${price}</Card.Text>
                        <Card.Text className='text-start'>{container}</Card.Text>
                        <Card.Text className='text-start'>{conservation}</Card.Text>
                        <Card.Text className='text-start'>{delivery}</Card.Text>
                        <div> {
                            cantidadAñadir === 0 ? (
                            <ItemCounter onAdd={handleOnAdd} stock={stock} initial={cantidadProducto}/>
                              ) : (
                                    <Link to= '/cart'>Finalizar compra</Link>
                              ) 
                            } 
                        </div>
                    </Card.Body>
                </Card>
    )
}

export default ItemDetail

