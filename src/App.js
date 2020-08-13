import React from 'react';
import './style.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <ContactFooter />
    </div>
  );
}

export default App;
