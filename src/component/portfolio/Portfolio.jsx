import React from 'react'
import './Portfolio.css'
function Portfolio() {
  return (
    <div className="port">
      <div className="portfolio">
        <h1>porfolio</h1>
      </div>
      <h1>Skills & Tools</h1>
      <p>
        <b>Frontend:</b> React, Vite, Sass, npm <br />
        <b>DevOps:</b> GitHub, proxies, environment cleanup <br />
        <b> Problem Solving:</b>
        Root-cause debugging, error prevention <br />
        <b>Cultural Design:</b> Amharic typography, Ethiopian color palettes
      </p>
      <h1>📜 About Me</h1>
      <p>
        <b>Your Story:</b> Share your journey—how tech and heritage intersect in
        your work <br />
        <b>Values:</b> Authenticity, resilience, and pride in Ethiopian history
        <br />
        <b> Fun Fact:</b> Maybe something like “I name my projects after
        historical Ethiopian figures”
      </p>
      <h1>📞 Contact</h1>
      <p>
        Email, LinkedIn, GitHub <br /> Optional: A contact form with validation
        (React Hook Form or similar)
      </p>
    </div>
  );
}

export default Portfolio
