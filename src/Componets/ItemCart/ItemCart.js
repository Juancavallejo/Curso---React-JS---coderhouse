import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import {Row, Col} from "react-bootstrap"

const ItemCart = ({item}) => {
    const {removeItem} = useContext(CartContext)

   
    return (
        <Container className="d-flex justify-content-center">
        
        <Card border="dark" style={{ width: '60rem', height: '13rem' }}>
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
            <Row style={{height: '6rem' }}>
                <Col md={5}>
                    <Card.Img className='col-4' variant="top" src={item?.img} style={{ width: '15rem', height: '7rem' }} />
                </Col>
                <Col md={5}>
                    <Card.Text className='text-start'>{item.quantity}</Card.Text>
                </Col>
                <Col>
                    <Card.Text className='text-start'> Total ${item.quantity * item.price.toFixed(2)}</Card.Text>
                </Col>
            </Row>
            <button className= 'btn btn-outline-danger' onClick={() => removeItem(item.id)}>Eliminar producto</button>        
        </Card.Body>
        </Card>
    </Container>
    )
}

export default ItemCart