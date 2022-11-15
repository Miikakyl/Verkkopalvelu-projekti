import '../styles/nav.css'
import Logo from '../Kuvat/Sivustokuvat/Collect_shoes.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Shoppingcart from './Shoppingcart'
import LoginForm from './LoginForm'

/*
*/
const Nav = () => {

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
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMen" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Miehet
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMen">
                <Link to="#" className="dropdown-item" href="#">Kävelykengät</Link>
                <Link to="#" className="dropdown-item" href="#">Koripallokengät</Link>
                <Link to="#" className="dropdown-item" href="#">Skeittikengät</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownWomen" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Naiset
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownWomen">
                <Link to="#" className="dropdown-item" href="#">Kävelykengät</Link>
                <Link to="#" className="dropdown-item" href="#">Koripallokengät</Link>
                <Link to="#" className="dropdown-item" href="#">Skeittikengät</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownBrands" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <form className="inputForm d-flex position-relative" role="search">
          <input className="searchInput mx-2" type="text" placeholder="Haku" aria-label="Search">
          </input>
          <button id="searchBtn" onClick={() => { }}>
            <svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <div className="d-flex flex-row buttonContainer">
          <LoginForm />
          <Shoppingcart />
          <button className="navbar-toggler p-0" data-bs-toggle="collapse" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg id="hamburgerIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;