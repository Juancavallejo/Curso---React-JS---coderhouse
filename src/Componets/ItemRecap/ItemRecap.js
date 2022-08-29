import { Container, Row, Col } from "react-bootstrap"

const ItemRecap = ({name, quantity, price }) => {
    return (
        <Container>
            <Row className="shadow rounded border-bottom border-dark mt-2">
                <Col>
                    <p>{name}</p>
                </Col>
                <Col>
                    <p>{quantity} unidades</p>
                </Col>
                <Col>
                    <p> por valor de {quantity * price} </p>
                </Col>
            </Row>
        </Container>

    )
}

export default ItemRecap