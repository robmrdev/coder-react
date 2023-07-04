import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SideMenu.css'
import { Link, NavLink } from 'react-router-dom';

const SideMenu = ({ sideMenuAlign }) => {
  const newClass = `navBurguer ${sideMenuAlign}`;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className={newClass}>
        <div className='navBurguerContainer'>
            <i className="fi fi-br-menu-burger" onClick={handleShow}></i>
            <strong>Menu</strong>
        </div>
        <Offcanvas show={show} onHide={handleClose} className='sideMenuContainer'>
            <Offcanvas.Header closeButton className='offcanvasHeader'>
                <Offcanvas.Title href="#home">
                    <Link to="/">
                    <img src="https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/logo.svg" alt="IKEA logo" />
                    </Link>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul className="navChoices">
                    <li>
                        <NavLink to="/category/Chairs">Chairs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Desks">Desks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Wardrobes">Wardrobes</NavLink>
                    </li>
                    {/* <li className='navItemHighlight'><a href="#Products">Products</a></li>
                    <li className='navItemHighlight'><a href="#Rooms">Rooms</a></li>
                    <li className='navItemHighlight'><a href="#Sale">Sale</a></li>
                    <li className='navItemMedium'><a href="#Ideas">Ideas</a></li>
                    <li className='navItemMedium'><a href="#What's New">What's New</a></li>
                    <li className='navItemLow navItemSpace'><a href="#About Us">About Us</a></li>
                    <li className='navItemLow'><a href="#Disclaimer">Disclaimer</a></li> */}
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default SideMenu