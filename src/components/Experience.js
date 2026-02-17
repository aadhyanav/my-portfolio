import React, { useState } from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'SoCalGas',
      title: ' Data Analyst/Engineer',
      dates: 'Jul 2024 – Present, Downtown Los Angeles (Hybrid)',
      description: [
        'Optimized ETL pipelines in Python and SQL to extract and structure financial forecast data from TM1 and Sharepoint.',
        'Developed automated reporting pipelines that integrated analytics into workflows, reducing manual effort by 80%.',
        'Led meetings with support teams and stakeholders to gather key documents (e.g., Recovery Scripts, Architecture Diagrams) and coordinated off-shore approvals for Disaster Recovery testing.',
        'Collaborated closely with Business and Technical Project Managers to gather project scope and timeline details for the development of comprehensive Business Requirements documentation.'
      ]
    },
    {
      company: 'UCSD Economics Lab',
      title: 'Research Assistant',
      dates: 'Sep 2022 – Jun 2024, San Diego',
      description: [
        'Developed a large-scale data collection pipeline using Python (BeautifulSoup, Requests, Pandas) to scrape and structure NGO data across African regions for economic impact analysis.',
        'Designed a Python script for optical character recognition (OCR), extracting text from historical images, applying advanced string manipulation and APIs for language translation from French to English to improve accuracy and readability.',
        'Summarized findings from over 80+ documents for a comprehensive literature review on state-level responses to the closure of religious places of worship across all 50 U.S. states during the COVID-19 pandemic.',
        'Created various visualizations using Matplotlib and Seaborn in Python after transforming and cleaning datasets of raw data collected for household bargaining in India. '
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
