import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';



export default function Portfoio({ projects }) {
  
  return (
    <div>
      <h1>Portfoio</h1>
      <Row>
      {projects.map((project) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={project.img} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Nav
              onSelect={() => window.open(`${project.github}`)}
            >
              <Nav.Item>
                <Nav.Link href="/home" src={project.git}>Github</Nav.Link>
              </Nav.Item>
    
            </Nav>
            <Nav
              onSelect={() => window.open(`${project.deployed}`)}
            >
              <Nav.Item>
                <Nav.Link href="/home" src={project.git}>Deployed Site</Nav.Link>
              </Nav.Item>
    
            </Nav>
          </Card.Body>
        </Card>
      ))}
      </Row>
    </div>
  );
}

/* <div>
<h1>Portfoio</h1>
  {projects.map((project) => (
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={project.img} />
<Card.Body>
 <Card.Title>{project.title}</Card.Title>
 <Image href={project.github} src={project.git} width={40} height={40} roundedCircle />
 <Button variant="primary">{project.deployed}</Button>
</Card.Body>
</Card>
  ))}
</div>
); */
