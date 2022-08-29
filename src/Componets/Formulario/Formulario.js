import { useContext } from "react"
import { Row, Col, Form } from "react-bootstrap";
import FormContext from "../../context/FormContext";

const Formulario = () => {
    const 
    {
        nombre, setNombre,
        email, setEmail,
        contacto, setContacto,
        dirección, setDireccion,
        ciudad, setCiudad
    } 
    = useContext(FormContext)
    
    return (
                <Form className="bg-light formContainer border rounded border-3 border-dark p-3 m-5">
                    <h4>Datos de contacto </h4>
                    <Row>
                        <Col md={8}>
                            <div>
                            <label className="d-block">Nombre</label>
                             <input className="form-control" placeholder='Nombre completo' type={'text'} id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </div>
                           
                        </Col >
                        <Col md={4}>
                            <div>
                            <label className="d-block">Numero de contacto</label>
                            <input className="border form-control" placeholder='Numero de contacto' type={'number'} id="contacto" name="contacto" value={contacto} onChange={(e) => setContacto(e.target.value)} />
                            </div>
                        </Col>
                        <Col className="my-4" md={8}>
                            <div>
                            <label className="d-block">Correo electronico</label>
                            <input className="border form-control" placeholder='Correo electronico' type={'email'} id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={8}>
                        <div>
                            <label className="d-block">Dirección</label>
                            <input  className="border form-control" placeholder='Dirección' type={'address'} id="dirección" name="dirección" value={dirección} onChange={(e) => setDireccion(e.target.value)} />
                            </div>
                        </Col>
                        <Col md={4}>
                        <div>
                            <label className="d-block">Ciudad/Departamento</label>
                            <input className="border form-control" placeholder='Ciudad/Departamento' type={'text'} id="ciudad" name="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                            </div>
                        </Col>
                    </Row>
                </Form>
    )
}

export default Formulario