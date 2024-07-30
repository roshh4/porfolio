import React from 'react';
import { Element } from 'react-scroll'; 
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Project from './Project';
import './App.css';
import Card from './Card'

const App = () => (
  <div className="App">
    <Navbar />
    <Element name="home"><Home /></Element>
    <Element name="about"><Skills /></Element>
    <Element name="Poke"><Card /></Element>
    <Element name="project"><Project /></Element>
  </div>
);

export default App;