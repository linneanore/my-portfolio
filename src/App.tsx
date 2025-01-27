import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-white">Välkommen till min portfolio!</h1>
      </div> 
    </div>
  );
}

export default App;
