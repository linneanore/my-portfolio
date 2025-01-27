import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="flex gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="w-32 animate-spin" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-32 animate-bounce" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mt-8">Vite + React + Tailwind</h1>
      <p className="mt-4 text-lg">Tailwind CSS verkar fungera korrekt!</p>
      <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg">
        Klicka här
      </button>
    </div>
  );
}

export default App;
