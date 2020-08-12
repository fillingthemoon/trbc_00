import React from 'react';

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        TRBC
      </a>
      <ul className="main-nav" id="js-menu">
        <li>
          <a href="#" className="nav-links">
            About Us 
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Join Us
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            I\'m New
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Outreach
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Missions
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Discipleship 
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Facility Bookings 
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Resources
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
