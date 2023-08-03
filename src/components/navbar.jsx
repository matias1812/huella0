import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import SignUp from './signUp'
import "./navbar.css" 

import house from '/house.svg'
import logo from '/logo.jpeg' 
import search from '/search.svg'

function NavScrollExample() {
  return (
    <Navbar  expand="lg">
        <img className='logo' src={logo} alt="" />
      <Container>    
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button className='home' href='/' variant='outline-light'>
                <img className='icono' src={house} alt="white" />
                Home
            </Button>
            <SignUp />
          </Nav>
          <Form className="d-flex home">
            <Form.Control
              type="search"
              placeholder="Buscar Productos"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">
            <img src={search} alt="" />
            </Button>
          </Form>
          <Button className='home' variant='outline-light'>
                Mis compras
            </Button>       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;