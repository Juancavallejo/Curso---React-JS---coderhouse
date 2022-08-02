import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const NavbarBoostrap = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href='/category/Desiertos'>Desiertos</Nav.Link>
                        <Nav.Link href='/category/Nieve'>Nevados</Nav.Link>
                        <Nav.Link href='/category/Selvas'>Selvas</Nav.Link>
                        <NavDropdown title="Colombia" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Desierto de la Tatacoa</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Desierto de La Guajira </NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Amazonas </NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Rio de los 7 colores </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5"> Parque Nacional de los Nevados</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex justify-content-end">
                        <div className="d-flex mx-4 mt-2"> 1 <FontAwesomeIcon icon={faCartShopping}/> </div>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarBoostrap
