import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SideMenu.css'

const SideMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='navBurguer'>
        <i class="fi fi-br-menu-burger" onClick={handleShow}></i>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title href="#home">Nomad Spirit</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="navChoices">
        <li href="#Tents">Tents</li>
        <li href="#Backpacks">Backpacks</li>
        <li href="#Sleeping Bags">Sleeping Bags</li>
        <li href="#Usefull Gear">Usefull Gear</li>
        </ul>
        </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default SideMenu