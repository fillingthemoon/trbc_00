import React from 'react';
import { BiChurch } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

function ContactFooter() {
  return (
    <div>
      <div id="contact-footer-container">
        <div id="cf-text">
          <h1>Contact Us</h1>
          <hr id="contact-us-thickline" />
          <h2>Singapore Thomson Road Baptist Church</h2>
          <p><span><BiChurch /></span> 45 Thomson Road Singapore 307584</p>
          <p><span><HiOutlineMail /></span> admin@trbc.org.sg</p>
          <p><span><AiOutlinePhone /></span> +65 6256 2277</p>
        </div>
        <img
          id="img-trbc-map"
          src={require('../imgs/trbc_map.jpg')}
          alt=""
        />
      </div>
      <div id="cf-copyright">Copyright © 2020. TRBC.</div>
    </div>
  );
}

export default ContactFooter;
