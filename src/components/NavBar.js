import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img id="img-logo" src={require('../imgs/logo.png')} alt="" />
      </Link>
      <ul className="main-nav" id="js-menu">
        <Link to="/trbc_00/">
          <li className="nav-links">Home</li>
        </Link>
        <Link to="/trbc_00/aboutus">
          <li className="nav-links">About Us</li>
        </Link>
        <Link to="/trbc_00/joinus">
          <li className="nav-links">Join Us</li>
        </Link>
        <Link to="/trbc_00/imnew">
          <li className="nav-links">I'm New</li>
        </Link>
        <Link to="/trbc_00/outreach">
          <li className="nav-links">Outreach</li>
        </Link>
        <Link to="/trbc_00/missions">
          <li className="nav-links">Missions</li>
        </Link>
        <Link to="/trbc_00/discipleship">
          <li className="nav-links">Discipleship</li>
        </Link>
        <Link to="/trbc_00/facilitybookings">
          <li className="nav-links">Facility Bookings</li>
        </Link>
        <Link to="/trbc_00/resources">
          <li className="nav-links">Resources</li>
        </Link>
        <Link to="/trbc_00/">
          <li className="nav-links" id="lang-toggle">
            ENGLISH
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
