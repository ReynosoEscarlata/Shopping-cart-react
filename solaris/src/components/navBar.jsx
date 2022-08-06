import {React,  useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
//CONTEXT
import {CartContext} from '../contexts/cartContext';
//COMPONENTES
//bootstrap 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//Personales 
import Cart from './Style-Components/cart'


export default function NavBar() {
    const cartContent  = useContext(CartContext);
    return (
        <>
            <Navbar bg="light" className="navbar" expand="xl" >
                <Container className="d-block mx-1" fluid>
                    <Row className="g-2">
                        <Col md>
                        <Link to={`/`} className="text-decoration-none">
                            <Navbar.Brand>
                                <img src={require('../img/logo zero.png')} style={{ height: '50px' }} /> 
                                Solaris
                            </Navbar.Brand>
                        </Link>
                        </Col>
                        <Col md>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar"
                                    className="me-2" />
                                <Button variant="outline-success">Buscar</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="xl" className="navbar">
                <Container className="d-block mx-1" fluid>
                    <Row className="g-3  justify-content-center" >
                        <Col lg>
                            <Nav className="justify-content-center">
                                <i className="fas fa-map-marker-alt fa-lg"></i>
                                <h5>-México</h5>
                            </Nav>
                        </Col>
                        <Col md>
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className=" my-2 my-lg-0 justify-content-end" style={{ maxHeight: '100px', minWidth: '100%' }} navbarScroll>
                                    <NavDropdown title="Usuario" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#compras">
                                            Compras
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#carrito">
                                            Perfil
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#action1">Inicio</Nav.Link>
                                    <Nav.Link href="#carrito" disabled>Vender</Nav.Link>
                                    <Nav.Link href="#carrito" disabled>Carrito</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                        <Col lg>
                            <Nav className="justify-content-end me-2">
                                <Cart cant={cartContent.cantInCart}/>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
                <Navbar.Toggle aria-controls="navbarScroll" />

            </Navbar>
        </>
    );
}
