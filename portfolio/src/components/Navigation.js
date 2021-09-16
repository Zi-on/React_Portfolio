import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles/Portfolio.css'

function Navigation({ currentPage, handlePageChange}) {
    return (
        <Navbar className="top" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"> Zion Flores</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link lg="3" href="#about-me"
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