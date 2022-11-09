import '../styles/nav.css'
import Logo from '../Kuvat/Sivustokuvat/Collect_shoes.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Shoppingcart from './Shoppingcart'

/*
*/
const Nav = () => {
  //Tähän komponenttiin fetchi mikä hakee tuotteet taulusta shoppingCartShow:n ja delete iconia painamalla voi poistaa.
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-0">
        <img src={Logo} alt="" id='logo'></img>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-0 mb-2 mb-lg-0 d-flex">
            <li className='nav-item'>
              <Link className='nav-link' to="#">Kotisivu</Link>
            </li>

            <li className="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMen" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Miehet
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMen">
                <Link to="#" className="dropdown-item" href="#">Kävelykengät</Link>
                <Link to="#" className="dropdown-item" href="#">Koripallokengät</Link>
                <Link to="#" className="dropdown-item" href="#">Skeittikengät</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownWomen" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Naiset
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownWomen">
                <Link to="#" className="dropdown-item" href="#">Kävelykengät</Link>
                <Link to="#" className="dropdown-item" href="#">Koripallokengät</Link>
                <Link to="#" className="dropdown-item" href="#">Skeittikengät</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownBrands" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Brandit
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownBrands">
                <Link to="#" className="dropdown-item">Adidas</Link>
                <Link to="#" className="dropdown-item">Converse</Link>
                <Link to="#" className="dropdown-item">Nike</Link>
                <Link to="#" className="dropdown-item">Reebok</Link>
                <Link to="#" className="dropdown-item">Vans</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="#">Tietoa meistä</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-row buttonContainer">
          <form className="inputForm d-flex position-relative" role="search">
            <input className="searchInput mx-2" type="text" placeholder="Haku" aria-label="Search">
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
          <button className="navbar-toggler p-0" data-bs-toggle="collapse" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg id="hamburgerIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;