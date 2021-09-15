import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Zion Flores</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about-me">About me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation