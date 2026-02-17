import React, { useState } from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'XDR Radiology',
      title: ' Data Scientist Intern ',
      dates: 'Oct 2025 – Present, Remote',
      description: [
        'Built machine learning pipelines leveraging TF-IDF vectorization and unsupervised clustering to analyze large-scale customer and product data, uncovering patterns and segment-level insights. Communicated findings through structured analyses and visualizations.'
      ]
    },
    {
      company: 'SoCalGas',
      title: ' Data Analyst/Engineer',
      dates: 'Jul 2024 – Jun 2025, Downtown Los Angeles (Hybrid)',
      description: [
        'Developed Python- and SQL-based data pipelines and automated analytics workflows, collaborating with stakeholders to deliver validated datasets and insight-driven dashboards for leadership.'
      ]
    },
    {
      company: 'UCSD Economics Lab',
      title: 'Data Science Researcher',
      dates: 'Sep 2022 – Jun 2024, San Diego',
      description: [
        'Designed Python-based data collection and processing pipelines for large-scale economic and social research, leveraging OCR for text extraction from historical documents, multilingual translation, and advanced data cleaning. Transformed unstructured data into analysis-ready datasets and visual insights.'
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="experience-section">
      <h1>Experience</h1>
      <div className="experience-layout">
        <div className="company-buttons">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`company-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div className="experience-details">
          <h2>{experiences[activeIndex].title} at {experiences[activeIndex].company}</h2>
          <p>{experiences[activeIndex].dates}</p>
          <ul className="experience-list">
            {experiences[activeIndex].description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
