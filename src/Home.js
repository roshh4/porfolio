import React from 'react';
import './Home.css';
const Home = () => (
  <div className="home-container">
    <div className="left">
      <h1>Hi, I'm Roshini!</h1>
      <p>Welcome to my portfolio! I'm a passionate Computer Science student with a knack for both frontend and backend development. My projects span from intuitive music players to streamlined food ordering apps. Dive into my work to see how I blend technical expertise with creative problem-solving.</p>
    </div>
    <div className="right">
      <img className="img" src="web.JPG" alt="A descriptive alt text for the image" />
    </div>
  </div>
);

export default Home;
