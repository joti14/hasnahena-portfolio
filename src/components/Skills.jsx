import React from 'react';
import { Container, Badge } from 'react-bootstrap';

const skills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Responsive Design',
  'Python', 'Git', 'GitHub', 'VS Code', 'Chrome DevTools',
  'Rest APIs', 'State Management', 'Component Architecture', 'Conditional Rendering',
  'AWS Cloud Computing (AWS Academy)', 'Generative AI Basics',
  'Problem Solving', 'Learning Agility', 'Communication'
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2>Skills</h2>
        <div>
          {skills.map((skill, index) => (
            <Badge key={index} variant="primary" className="mr-2 mb-2">{skill}</Badge>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;