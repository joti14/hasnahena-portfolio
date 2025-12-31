import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Hasna Hena Joti</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#summary">Summary</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#certifications">Certifications</Nav.Link>
          <Nav.Link href="#activities">Activities</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="mailto:hasnahenajoti1414@gmail.com">Contact</Nav.Link>
          <Nav.Link href="https://linkedin.com/in/your-linkedin" target="_blank">LinkedIn</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;