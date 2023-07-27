import React from 'react'
import TopBar from './TopBar/TopBar';
import CartWidget from './CartWidget/CartWidget';
import SideMenu from './SideMenu/SideMenu';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LogInButton from './LogInButton/LogInButton';

const NavBar = () => {

  return (
    <>
      <TopBar/>
      <SideMenu sideMenuAlign="sideMenuLeft"/>
      <header>
          <div className='headBarContainer'>
            <Link to="/">
              <img src="https://raw.githubusercontent.com/robmrivas/coder-react/main/src/img/logo.svg" alt="IKEA logo" />
            </Link>
            <div className="searchBox">
                <input type="search" placeholder="What are you looking for?"></input>
                <i className="fi fi-br-search"></i>
            </div>
            <span className='navIcons'>
                <div className='navLogIn'>
                  <i className="fi fi-br-user"></i>
                  <LogInButton/>
                </div>
                <i className="fi fi-br-heart"></i>          
                <CartWidget/>
                <SideMenu sideMenuAlign="sideMenuRight"/>
            </span>
          </div>
      </header>
    </>
  )
}

export default NavBar