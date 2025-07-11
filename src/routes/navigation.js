import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import {Link} from 'react-router';
export  function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="../">Home</Nav.Link>
            <Nav.Link as={Link} to="../about">About</Nav.Link>
            <Nav.Link as={Link} to="../musicgroups">MusicGroup</Nav.Link>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}