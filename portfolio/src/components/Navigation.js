import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation({ currentPage, handlePageChange}) {
    return (
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Zion Flores
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about-me"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About me</Nav.Link>
          <Nav.Link href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >Portfolio</Nav.Link>
          <Nav.Link href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact</Nav.Link>
          <Nav.Link href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >Resume</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation