import React from 'react';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-section">
    <img src={process.env.PUBLIC_URL + "/aadhya.jpg"} alt="Aadhya" className="about-image" />
    <div className="social-links">
      <a href="https://www.linkedin.com/in/aadhya-naveen-a87a96268/" target="_blank" rel="noopener noreferrer"> 
        <img src={process.env.PUBLIC_URL + "/linkedin.png"} alt="LinkedIn" />
      </a>
      <a href="https://github.com/aadhyanav/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
      </a>
        </div>
      </div>
      <div className="about-text">
        <h1>Hi, I'm <strong>Aadhya!</strong></h1>
        <p> My interest in data science and technology began during my time at UCSD, where I initially planned to pursue pre-med. 
        However, I soon discovered the limitless ways in which data and technology can be used to solve real-world problems and make 
        a meaningful impact on people’s lives. </p> 

        <p> Currently, I'm a Data Science Masters student at USF and I previously worked at SoCalGas as an Analyst. In my free time, I like to hike, dance, read, and explore new places! 
        I'm continuously learning! :) 
        </p>
      </div>
      </div>
      <div className="skills-container">
      <div className="skills-box">
        <h2>Languages & Tools 💻</h2>
        <ul className="skills-list-bullets">
          <li>Python (Pandas, Numpy, Sklearn, Pytorch)</li>
          <li>SQL</li>
          <li>JavaScript (Svelte, React) </li>
          <li>HTML/CSS</li>
          <li>R programming</li>
        </ul>
      </div>

      <div className="skills-box2">
        <h2>Relevant Coursework 📚</h2>
        <ul className="skills-list-bullets2">
          <li>Data Structures & Algorithms </li>
          <li>Data Visualization </li>
          <li>Econometrics & Statistics </li>
          <li>Probabilistic Modeling and Machine Learning</li>
          <li>Linear Algebra </li>
        </ul>
      </div>
      </div>
    </section>
  );
}

export default About;
