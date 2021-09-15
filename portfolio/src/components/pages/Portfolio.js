import React from 'react';
import Figure from 'react-bootstrap/Figure';
import employee from '../src/pictures/employee.jpg';


export default function Portfoio({ projects }) {
  return (
    <div>
      <h1>Portfoio</h1>
        {projects.map((project) => (
         <Figure>
         <Figure.Image
           width={171}
           height={180}
           alt="171x180"
           src={employee}
         />
         <Figure.Caption>
           {`${project.title} ${project.github}`}
         </Figure.Caption>
       </Figure>
        ))}
    </div>
  );
}