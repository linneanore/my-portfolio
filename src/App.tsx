import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
//import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <div classname="pt-20 text-center">
        <h1 classname="text-5x1 font-bold text-white">Välkommen till min portfolio!</h1>
      </div> 
    </div>
  );
}

export default App;
