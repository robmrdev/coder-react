import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nomad Spirit</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Tents">Tents</Nav.Link>
            <Nav.Link href="#Backpacks">Backpacks</Nav.Link>
            <Nav.Link href="#Sleeping Bags">Sleeping Bags</Nav.Link>
            <Nav.Link href="#Usefull Gear">Usefull Gear</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
  )
}

export default NavBar