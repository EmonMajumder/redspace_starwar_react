import React from 'react';
import Intro from './components/Intro';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">People</a>

        </div>
      </nav>
      <div className="container">

        <Intro/>
      </div>        
    </div>
  );
}

export default App;
