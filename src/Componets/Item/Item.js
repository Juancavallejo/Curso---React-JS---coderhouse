import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"; 
 

const Item = ({ product }) => {
    return (
            <Card border="danger" className='d-inline-flex m-3' style={{ width: '28rem', height: '25rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.Description}</Card.Text>
                    <Link to= {`/detail/${product.id}`}>Más detalles</Link>
                </Card.Body>
            </Card>
    );
}

export default Item