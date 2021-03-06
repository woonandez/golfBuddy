import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="landingContainer">
      <div className="topContainer">
        <h1>
          Welcome to Golf Buddy <span role="img" aria-label="golf buddy">⛳️</span>
        </h1>
      </div>
      <div className="middleContainer">
        <h1>
          Coming soon...
        </h1>
      </div>
    </div>
  )
};

export default Landing;