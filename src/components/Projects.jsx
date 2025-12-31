import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    title: 'React Movie Card App',
    description: 'Developed a clean, responsive React application for browsing and displaying movie cards fetched from an external API, enabling real-time search and filtering.',
    tech: 'React.js, JavaScript, HTML, CSS, REST API',
    link: 'https://github.com/joti14/react-movie-card'
  },
  {
    title: 'Daily Productivity Tracker',
    description: 'Created a productivity dashboard using React and LocalStorage to track daily tasks, habits, and focus time, helping users improve personal productivity.',
    tech: 'React.js, JavaScript, LocalStorage',
    link: 'https://github.com/joti14/daily-productivity-tracker'
  },
  {
    title: 'Weather & Air Quality Dashboard',
    description: 'Built a real-time environment dashboard integrating OpenWeather API to display current weather conditions and air quality index for any city.',
    tech: 'React.js, JavaScript, REST API',
    link: 'https://github.com/joti14/weather-dashboard'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2>Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text><strong>Technologies:</strong> {project.tech}</Card.Text>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
