import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Education from './components/Education';

function App() {
  return (
    <div>
      <Header />
      <Summary />
      <Projects />
      <Skills />
      <Certifications />
      <Activities />
      <Education />
    </div>
  );
}

export default App;