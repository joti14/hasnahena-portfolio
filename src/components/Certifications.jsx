import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const certifications = [
  'Agile Foundations: LinkedIn Learning',
  'Generative AI for Software Development',
  'AWS Cloud Computing: AWS Academy'
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-5">
      <Container>
        <h2>Certifications</h2>
        <ListGroup>
          {certifications.map((cert, index) => (
            <ListGroup.Item key={index}>{cert}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </section>
  );
};

export default Certifications;