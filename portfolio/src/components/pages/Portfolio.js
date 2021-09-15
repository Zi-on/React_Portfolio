import React from 'react';

export default function Portfoio({ projects }) {
  return (
    <div>
      <h1>Portfoio</h1>
        {projects.map((project) => (
          <li className="list-group-item">
            {`${project.title} ${project.github} (${project.deployed})`}
          </li>
        ))}
    </div>
  );
}