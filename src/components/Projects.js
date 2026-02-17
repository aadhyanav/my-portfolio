import React, { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Cat Persona Quiz',
      image: process.env.PUBLIC_URL + '/Cat.png',
      description: [
        'Created an interactive full-stack web application using JavaScript, HTML, and CSS, engaging users with a dynamic personality quiz that returns a user’s “cat persona” after a series of questions.',
        'Focused on user-centric design, incorporating intuitive UI/UX, attractive layouts, and accessibility features.',
        'Implemented Git for version control and shared code repository, ensuring seamless collaboration and iterative development.'
      ],
      link: {
        url: 'https://aadhyanav.github.io/CatWonderland/',
        text: 'Take the Quiz Here!'
      }
    },
    {
      name: 'Recipe Prediction Model',
      image: process.env.PUBLIC_URL + '/Recipe.png',
      description: [
        'Built a predictive ML pipeline in Python (scikit-learn, Pandas) using a RandomForestClassifier to classify recipe ratings (1-5) based on key features, achieving a 78% F1-score.',
        'Engineered features using one-hot encoding, dataset merging, and normalization, optimizing for model performance.',
        'Applied hyperparameter tuning using grid search cross-validation to increase model accuracy and improve train-test generalization.'
      ],
      link: {
        url: 'https://aadhyanav.github.io/Recipe_Ratings/',
        text: 'Link: Recipe Ratings ML Model'
      }
    },
    {
      name: 'San Diego Air Traffic Visualization',
      image: process.env.PUBLIC_URL +'/SDAir.png',
      description: [
        'Led the collaborative development of a JavaScript interactive visualization using d3.js and Svelte, highlighting trends in air traffic at the San Diego International Airport.',
        'Analyzed passenger data and found that travelers are three times more likely to fly domestically than internationally, emphasizing San Diego Airport’s prominence as a domestic connecting hub over an international hub.',
        'Designed intuitive features including customizable buttons, sliders, hover-over functionality, and clickable maps, enhancing user exploration and understanding of the data.'
      ],
      link: {
        url: 'https://antoinecarre1.github.io/Final-Project/',
        text: 'Link: SD Air Space Interative Visualization'
      }
    },
    {
        name: 'India Safety Index & Crime Analysis (In progress)',
        image: process.env.PUBLIC_URL +'/India.png',
        description: [
          'Conducted exploratory data analysis on crime data in India using Python packages Seaborn and Matplotlib to visualize victim demographics across regions.',
          'Developed a predictive model to generate a city-based safety index from 1-5, using ML techniques for risk assessment.'
        ],
        link: {
            url: 'https://github.com/aadhyanav/india_crimes_analysis/blob/main/india_crimes.ipynb',
            text: 'Link: India Crimes Notebook'
          }
      }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <img
        src={projects[activeIndex].image}
        alt={`${projects[activeIndex].name} preview`}
        className="project-image"
      />
      <div className="projects-layout">
        <div className="project-buttons">
          {projects.map((proj, index) => (
            <button
              key={index}
              className={`project-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {proj.name}
            </button>
          ))}
        </div>

        <div className="project-details">
          <h2>{projects[activeIndex].name}</h2>
          <ul className="project-list">
            {projects[activeIndex].description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
            {projects[activeIndex].link && (
            <a
            href={projects[activeIndex].link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
    >
      {projects[activeIndex].link.text}
    </a>
  )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
