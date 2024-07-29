import React from 'react';
import './Skills.css';

const Skills = () => (
  <div className="skills">
    <h1 className="title">My Skills</h1>
    <div className="sk1">
      <h2>Programming Languages</h2>
      <ul>
        <li>Python</li>
        <li>C</li>
        <li>Java</li>
        <li>R</li>
        <li>C++</li>
      </ul>
    </div>
    <div className="sk1">
      <h2>Computer Science Fundementals</h2>
      <ul>
        <li>Data Structures and Algorithms</li>
        <li>OOPs</li>
        <li>Database management</li>
      </ul>
    </div>
    <div className="sk1">
      <h2>Machine Learning</h2>
      <ul>
        <li>Linear regression</li>
        <li>Logistic Regression</li>
        <li>KNN</li>
        <li>unsupervised learning</li>
      </ul>
    </div>
  </div>
);

export default Skills;