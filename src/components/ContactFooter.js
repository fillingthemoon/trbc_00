import React from 'react';

function ContactFooter() {
  return (
    <div id="contact-footer-container">
      <div id="cf-text">
        <h2>Contact Us</h2>
        <p>Singapore Thomson Road Baptist Church</p>
      </div>
      <img 
        id="img-trbc-map"
        src={require('../imgs/trbc_map.jpg')}
        alt=""
      />
    </div>
  )
}

export default ContactFooter;
