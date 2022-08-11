import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"; 
import "./Item.css";

const Item = ({ product }) => {
    return (
            <Card border="dark" className='cardList d-inline-flex m-3 ' style={{ width: '28rem', height: '37rem' }}>
                <Card.Img variant="top" src={product?.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className='text-start'>{product.description}</Card.Text>
                    <Link className='btn btn-outline-dark' to= {`/detail/${product.id}`}>Más detalles</Link>
                </Card.Body>
            </Card>
    );
}

export default Item