import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardWidget from '../CartWidget/CartWidget';


const NavbarBoostrap = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-2 fs-6"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href='/category/Desierto'>Desiertos</Nav.Link>
                        <Nav.Link href='/category/Nevados'>Nevados</Nav.Link>
                        <Nav.Link href='/category/Selvas'>Selvas</Nav.Link>
                        <Nav.Link href='/category/Colombia'>Colombia</Nav.Link>
                    </Nav>
                    <Form className="d-flex justify-content-end">
                        <div className="d-flex mx-4 w-50"> <CardWidget/> </div>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarBoostrap
