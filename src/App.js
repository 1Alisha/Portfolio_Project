import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
