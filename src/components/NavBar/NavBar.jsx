import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TopBar from '../TopBar/TopBar';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <TopBar/>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Nomad Spirit</Navbar.Brand>
          <div className="search_box">
              <input type="search" placeholder="What are you looking for?"></input>
              <i className="fi fi-br-search"></i>
          </div>
          <Nav className="navItems">
            <Nav.Link href="#Tents">Tents</Nav.Link>
            <Nav.Link href="#Backpacks">Backpacks</Nav.Link>
            <Nav.Link href="#Sleeping Bags">Sleeping Bags</Nav.Link>
            <Nav.Link href="#Usefull Gear">Usefull Gear</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
    </>
  )
}

export default NavBar