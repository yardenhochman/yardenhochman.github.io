import React from 'react';
import './App.css';
import Intro from './components/Intro/intro';
import Projects from './components/Projects/projects';
import Bio from './components/Bio/bio';

const App = () => (
  <main>
    <Intro />
    <Projects />
    <Bio />
  </main>
);

export default App;
