import Card from 'react-bootstrap/Card';

const ItemDetail = ({ name, price, description, img, container, conservation, delivery }) => {
    return (
                <Card style={{height: '25rem' }}>
                    <Card.Body className='bg-secondary text-light'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Img variant="top" src={img} />
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>${price}</Card.Text>
                        <Card.Text className='text-start'>{container}</Card.Text>
                        <Card.Text className='text-start'>{conservation}</Card.Text>
                        <Card.Text className='text-start'>{delivery}</Card.Text>
                    </Card.Body>
                </Card>
    )
}

export default ItemDetail

