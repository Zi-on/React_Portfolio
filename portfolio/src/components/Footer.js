import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import githubEmoji from "./pictures/github.png";
import linkedinEmoji from "./pictures/linkedin.png";
import youtubeEmoji from "./pictures/youtube.png";

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
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image onClick={linkedinClick} src={linkedinEmoji} width={70} height={70} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image onClick={githubClick} src={githubEmoji} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image onClick={youtubeClick} src={youtubeEmoji} width={70} height={70} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
