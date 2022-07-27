import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ product }) => {
    return (
            <Card border="danger" className='d-inline-flex m-3' style={{ width: '28rem', height: '25rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.Description}</Card.Text>
                    <Button variant="primary">Más detalles</Button>
                </Card.Body>
            </Card>
    );
}

export default Item