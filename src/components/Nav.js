import '../styles/nav.css'
import Logo from '../Kuvat/Sivustokuvat/Collect_shoes.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo03">
          <img src={Logo} id='logo'></img>
          <ul className="navbar-nav mx-0 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="#" className="link">Kotisivu</Link>
            </li>
            <li className="nav-item" id="menLink">
              <Link to="#" className="link">Miehet</Link>
              <ul id='dropdownMen'>
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
              </ul>
            </li>
            <li className="nav-item" id="womenLink">
              <Link to="#" className="link">Naiset</Link>
              <ul id='dropdownWomen'>
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="#" className="link">Brandit</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="link">Tietoa meistä</Link>
            </li>
          </ul>
          <div className="d-flex flex-row">
            <form className="inputForm d-flex px-4" role="search">
              <input className="searchInput  me-2" type="text" placeholder="Haku" aria-label="Search">
              </input>
              <button id="searchBtn" onClick={() => { console.log("Search") }}>
                <svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>
            <button id="shoppinCartBtn">
              <svg id="shoppingCartIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;