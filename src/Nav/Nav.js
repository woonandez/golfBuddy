import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="navContainer">
      <div className="golfBuddyLogoContainer">
        <Link to="/">
          <p>Golf Buddy<span role="img" aria-label="golf buddy"> ⛳️</span></p>
        </Link>
      </div>
      <Link to="/">
        <p className="golfBuddy">Golf Buddy</p>
      </Link>
      <Link to="/bagCreator">
        <p>Bag Creator</p>
      </Link>
    </div>
  )
};

export default Nav;