import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'lightgrey', fontFamily: 'Andale Mono' }}>Home  </Link>
      <Link to="/map" style={{ textDecoration: 'none',  color: 'lightgrey', fontFamily: 'Andale Mono' }}>|Map| </Link>  
      <Link to="/tipslist" style={{ textDecoration: 'none', color: 'lightgrey', fontFamily: 'Andale Mono' }}> Tips|  </Link>  
      <Link to="/about" style={{ textDecoration: 'none', color: 'lightgrey', fontFamily: 'Andale Mono' }}> About</Link> 
      
      </nav>
  );
}

export default Nav;