import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavbarBoostrap = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link className='btn btn-outline-dark mx-1' to="/">Ecommerce</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-2 fs-6"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='btn btn-outline-dark mx-1' to='/category/Desierto'>Desiertos</Link>
                        <Link className='btn btn-outline-dark mx-1' to='/category/Nevados'>Nevados</Link>
                        <Link className='btn btn-outline-dark mx-1' to='/category/Rios'>Rios</Link>
                        <Link className='btn btn-outline-dark mx-1' to='/category/Colombia'>Colombia</Link>
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
