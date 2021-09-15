import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import githubEmoji from "../pictures/github.png";
import linkedinEmoji from "../pictures/linkedin.png";
import youtubeEmoji from "../pictures/youtube.png";

function Footer() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image href="https://www.linkedin.com/in/zion-flores-684354214/" src={linkedinEmoji} width={70} height={70} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={githubEmoji} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={youtubeEmoji} width={70} height={70} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
