import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg';

const Summary = () => {
  return (
    <section id="summary" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Image 
            src={profileImage}
            className='profile-img'
            alt="Hasna Hena Joti" />
          </Col>
          <Col md={8}>
            <h2>Summary</h2>
            <p>
              Frontend Developer and Computer Science graduate with strong skills in React.js, JavaScript (ES6+), HTML5, and CSS3. Experienced in building responsive, component-based user interfaces, integrating REST APIs, and managing application state. Familiar with Git, Agile practices, cloud fundamentals, and Generative AI concepts. Actively building projects and solving problems on LeetCode to strengthen development skills.
            </p>
            <p>Cumilla, Bangladesh | +8801768922640 | hasnahenajoti1414@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Summary;