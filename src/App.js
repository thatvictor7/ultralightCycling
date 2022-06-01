import React from 'react'
import './styling/App.css';
import Navbar from './components/navbar.jsx'
import Intro from './components/intro.jsx'
import Content from './components/content.jsx'
import BottomNav from './components/bottomNav.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Content />
      <BottomNav />
    </div>
  );
}

export default App;
