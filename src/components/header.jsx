import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { useAuth } from "../context/auth.context";

import ajustes from '/gear.svg'
import cerrar from '/cerrar.svg'
import usuario from '/person-circle.svg'
import logo from "/logo.jpeg";
import ig from "/instagram.svg";
import face from "/facebook.svg";
import tik from "/tiktok.svg";
import twitter from "/twitter.svg";
import Whatsapp from "/whatsapp.svg";

function Header() {
  const auth = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <Navbar  expand="lg" className="header">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/body">Bidigestores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Repuestos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Fertilizantes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Membresia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mantencion</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/nosotros">
             Nosotros
            </Nav.Link>
            <div className="redesSociales">
              <img className="ig" src={ig} alt="" />
              <img className="face" src={face} alt="" />
              <img className="tik" src={tik} alt="" />
              <img className="twitter" src={twitter} alt="" />
              <img className="whatsapp" src={Whatsapp} alt="" />
            </div>
          </Nav>
        </Navbar.Collapse>
      <Button variant="light" onClick={handleShow} style={{ position: "fixed" }} className="more">
        <span className="navbar-toggler-icon"></span>
      </Button>
      <Offcanvas
        className="off"
        show={show}
        onHide={handleClose}
        placement="end"
        >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Fatus Chile</Offcanvas.Title>
        </Offcanvas.Header>
        <img className="profile-image-nav" src={logo} alt="Botón de opciones" />
        <Offcanvas.Body>
          <Offcanvas.Title>Maryory Belen</Offcanvas.Title>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home">
             <img src={usuario} alt="" /> Perfil
            </Nav.Link>
            <Nav.Link href="#home">
             <img src={ajustes} alt="" /> Ajustes
            </Nav.Link>
            <Button border="0" onClick={handleLogout} className="cerrar" >
              <img src={cerrar} alt=""/> Cerrar sesion
            </Button> 
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
        </Container>
    </Navbar>
  );
}

export default Header;
