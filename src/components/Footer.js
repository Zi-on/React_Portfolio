import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './styles/Footer.css'
import {FaLinkedin, FaYoutube, FaGithub} from "react-icons/fa"

function Footer() {
        const linkedinClick = () => {
          window.open("https://www.linkedin.com/in/zion-flores-684354214");
        };
        const githubClick = () => {
            window.open("https://www.github.com/zi-on");
          };
        const youtubeClick = () => {
            window.open("https://www.youtube.com/channel/UCe4tisvVYMzI1j51XRZEU0Q")
        }
        
  return (
    <Container className="d-flex justify-content-center footer">
      <Row>
        <Col >
          <FaLinkedin className="linkedin" onClick={linkedinClick} size={50} style={{color: 'blue'}} roundedCircle />
        </Col>
        <Col >
          <FaGithub className="github" onClick={githubClick} size={50} roundedCircle />
        </Col>
        <Col >
          <FaYoutube className="youtube" onClick={youtubeClick} size={50} style={{color: 'red'}} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
