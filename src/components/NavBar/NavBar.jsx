import React from 'react'
import TopBar from './TopBar/TopBar';
import CartWidget from './CartWidget/CartWidget';
import SideMenu from './SideMenu/SideMenu';
import './NavBar.css';

const NavBar = () => {

  return (
    <>
      <TopBar/>
      <SideMenu/>
      <header>
          <div className='headBarContainer'>
            <img src="https://www.ikea.com/nl/en/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="IKEA logo" />
            <div className="search_box">
                <input type="search" placeholder="What are you looking for?"></input>
                <i className="fi fi-br-search"></i>
            </div>
            <span className='navIcons'>
                <div className='navLogIn'>
                  <i className="fi fi-br-user"></i>
                  <strong>Log in or sign up</strong>
                </div>
                <i className="fi fi-br-heart"></i>          
                <CartWidget/>
            </span>
          </div>
      </header>
    </>
  )
}

export default NavBar