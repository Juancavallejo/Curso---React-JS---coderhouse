import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import {Row, Col} from "react-bootstrap"

const ItemCart = ({ id, img, name, quantity, price}) => {
    const {eliminarItem} = useContext(CartContext)
   
    return (
        <Container className="d-flex justify-content-center">
        <Card className='my-2' border="dark" style={{ width: '60rem'}}>
        <Card.Body>
        <Card.Title>{name}</Card.Title>
            <Row className="pt-2">
                <Col md={6}>
                    <Card.Img variant="top" src={img} style={{ width: '18rem', height: '9rem' }} />
                </Col>
                <Col md={3}>
                    <p className='text-end mx-4 d-block'> Cantidad de items: </p>
                    <Card.Text className='text-end mx-4'>{quantity} x </Card.Text>
                </Col>
                <Col md={3}>
                <p className='text-start d-block'> Valor unitario: </p>
                    <Card.Text className='text-start'> Total ${quantity * price.toFixed(2)}</Card.Text>
                </Col>
            </Row>
            <div className="d-flex justify-content-end">
            <button className= 'btn btn-outline-danger d-flex align-items-end' onClick={() => eliminarItem(id)}>Eliminar producto</button>        
            </div>




        </Card.Body>
        </Card>
    </Container>
    )
}

export default ItemCart