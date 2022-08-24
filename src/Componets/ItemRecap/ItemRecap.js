import { Container, Row, Col } from "react-bootstrap"

const ItemRecap = ({ itemRecap }) => {
    return (
        <Container>
            <Row className="shadow rounded border-bottom border-dark">
                <Col>
                    <p>{itemRecap.name}</p>
                </Col>
                <Col>
                    <p>{itemRecap.quantity} unidades</p>
                </Col>
                <Col>
                    <p> por valor de {itemRecap.quantity * itemRecap.price} </p>
                </Col>
            </Row>
        </Container>

    )
}

export default ItemRecap