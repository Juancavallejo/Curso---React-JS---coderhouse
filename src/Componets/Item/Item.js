import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"; 
import "./Item.css";

const Item = ({ id, img, name, description }) => {
    return (
            <Card border="dark" className='shadow cardList d-inline-flex m-3 ' style={{ width: '28rem', height: '37rem' }}>
                <Card.Img variant="top" src={img} alt={name}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-start'>{description}</Card.Text>
                    <Link className='btn btn-outline-dark' to= {`/detail/${id}`}>Más detalles</Link>
                </Card.Body>
            </Card>
    );
}

export default Item