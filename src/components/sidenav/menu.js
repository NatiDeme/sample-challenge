import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/"> Tour </Link>
          </li>
          <li>
            <Link to="/reserve"> Reserve </Link>
          </li>
        </ul>
      </Router>
    </>
  );
}

export default Menu;
