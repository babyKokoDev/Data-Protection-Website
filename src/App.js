import React from 'react'
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Data from './components/data/Data';
import Cloud from './components/cloud/Cloud';

function App() {
  return (
       <>
        <Navbar />
        <Hero />
        <Data />
        <Cloud />
       </>
  );
}

export default App;
