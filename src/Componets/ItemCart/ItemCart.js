import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ItemCart = ({item}) => {
    
    const {removeItem} = useContext(CartContext)
   
    return (
        <Card border="dark" className='cardList d-inline-flex m-3 ' style={{ width: '28rem', height: '37rem' }}>
        <Card.Img variant="top" src={item?.img} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text className='text-start'>{item.quantity}</Card.Text>
            <Card.Text className='text-start'> Total ${item.quantity * item.price}</Card.Text>
            <button onClick={removeItem}>eliminar producto</button>
        </Card.Body>
    </Card>
    )
}

export default ItemCart