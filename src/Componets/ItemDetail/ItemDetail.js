import Card from 'react-bootstrap/Card';

const ItemDetail = ({ name, price, description, img, container, conservation, delivery }) => {
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
                    </Card.Body>
                </Card>
    )
}

export default ItemDetail

