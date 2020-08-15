import React from 'react';

function ContactFooter() {
  return (
    <div id="contact-footer-container">
      <div id="cf-text">
        <h1>Contact Us</h1>
        <h2>Singapore Thomson Road Baptist Church</h2>
        <p>45 Thomson Road Singapore 307584</p>
        <p>admin@trbc.org.sg</p>
        <p>+65 6256 2277</p>
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
