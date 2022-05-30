import React from 'react'
import './App.css';
import Navbar from './components/navbar.jsx'
import Content from './components/content.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <div>
        world
      </div>
    </div>
  );
}

export default App;
