import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <About />
      <Experience />
      <Projects /> 
      {/* <Contact /> */}
    </div>
  );
}

export default App;

