import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
//import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="pt-20 text-center">
        <h1 className="text-5xl font-bold text-white">Välkommen till min portfolio!</h1>
      </div> 
    </div>
  );
}

export default App;
