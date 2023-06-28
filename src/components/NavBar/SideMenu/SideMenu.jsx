import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SideMenu.css'

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
                <Offcanvas.Title href="#home"><img src="https://www.ikea.com/nl/en/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="IKEA logo" />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul className="navChoices">
                    <li className='navItemHighlight'><a href="#Products">Products</a></li>
                    <li className='navItemHighlight'><a href="#Rooms">Rooms</a></li>
                    <li className='navItemHighlight'><a href="#Sale">Sale</a></li>
                    <li className='navItemMedium'><a href="#Ideas">Ideas</a></li>
                    <li className='navItemMedium'><a href="#What's New">What's New</a></li>
                    <li className='navItemLow navItemSpace'><a href="#About Us">About Us</a></li>
                    <li className='navItemLow'><a href="#Disclaimer">Disclaimer</a></li>
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default SideMenu