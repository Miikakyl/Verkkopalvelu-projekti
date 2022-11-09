import '../styles/nav.css'
import Logo from '../Kuvat/Sivustokuvat/Collect_shoes.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Shoppingcart from './Shoppingcart'

const Nav = () => {
  //Tähän komponenttiin fetchi mikä hakee tuotteet taulusta shoppingCartShow:n ja delete iconia painamalla voi poistaa.

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo03">
          <img src={Logo} id='logo' alt=""></img>
          <ul className="navbar-nav mx-0 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="#" className="link">Kotisivu</Link>
            </li>
            <li className="nav-item" id="dropdownLink">
              <Link to="#" className="link">Miehet</Link>
              <ul id='dropdownMen'>
                <li><Link className="dropDownLinks">Kävelykengät</Link></li>
                <li><Link className="dropDownLinks">Koripallokengät</Link></li>
                <li><Link className="dropDownLinks">Skeittikengät</Link></li>
              </ul>
            </li>
            <li className="nav-item" id="dropdownLink">
              <Link to="#" className="link">Naiset</Link>
              <ul id='dropdownWomen'>
                <li><Link className="dropDownLinks">Kävelykengät</Link></li>
                <li><Link className="dropDownLinks">Koripallokengät</Link></li>
                <li><Link className="dropDownLinks">Skeittikengät</Link></li>
              </ul>
            </li>
            <li className="nav-item" id="dropdownLink">
              <Link to="#" className="link">Brandit</Link>
              <ul id="dropdownBrand">
                <li><Link className="dropDownLinks">Adidas</Link></li>
                <li><Link className="dropDownLinks">Converse</Link></li>
                <li><Link className="dropDownLinks">Nike</Link></li>
                <li><Link className="dropDownLinks">Reebok</Link></li>
                <li><Link className="dropDownLinks">Vans</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="#" className="link">Tietoa meistä</Link>
            </li>
          </ul>
          <div className="d-flex flex-row">
            <form className="inputForm d-flex px-4" role="search">
              <input className="searchInput  me-2" type="text" placeholder="Haku" aria-label="Search">
              </input>
              <button id="searchBtn" onClick={() => { }}>
                <svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>
            <button id="loginSignBtn">
              <svg id="loginSignIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
              </svg>
            </button>
            <Shoppingcart />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;