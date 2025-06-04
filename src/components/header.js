import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export  function Header() {
  return (
        <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="./album.html" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4">Seido album template</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="./album.html" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="../album_cards.html" className="nav-link">Cards</a></li>
                <li className="nav-item"><a href="../album_carousel.html" className="nav-link">Carousel</a></li>
            </ul>
        </header>
      </div>
  )
}
