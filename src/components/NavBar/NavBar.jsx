import React from 'react'
import TopBar from '../TopBar/TopBar';
import CartWidget from '../CartWidget/CartWidget';
import SideMenu from '../SideMenu/SideMenu';
import './NavBar.css';

const NavBar = () => {

  return (
    <>
      <TopBar/>
      <header>
          <SideMenu/>
          <div className='headBarContainer'>
            <div href="#home" className='navBrand'>Nomad Spirit</div>
            <div className="search_box">
                <input type="search" placeholder="What are you looking for?"></input>
                <i className="fi fi-br-search"></i>
            </div>
            <span className='navIcons'>
                <div className='navLogIn navHover'>
                  <i className="fi fi-br-user"></i>
                  <p>Log in or sign up</p>
                </div>
                <i className="fi fi-br-heart navHover"></i>          
                <CartWidget/>
            </span>
          </div>
      </header>
    </>
  )
}

export default NavBar