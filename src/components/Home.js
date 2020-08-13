import React from 'react';

function Home() {
  return (
    <div>
      <div id="img-container">
        <img
          id="img-exterior"
          src={require("../imgs/exterior.jpg")} 
          alt="" 
        />
        <h1 id="img-title">Mission and Vision</h1>
      </div>  
      <div id="mission-vision-container">
        <div id="mv-diagrams-container">
          Diagrams
        </div>
        <div id="mv-text-container">
          <div id="mv-mission-container">
            <h1>Mission</h1>
            <p>To Be Disciples Moving as One Body in Christ, Bearing Fruit and Being the Salt and Light of the World.</p>
          </div>
          <div id="mv-vision-container">
            <h1>Vision</h1>
            <p>To Be Disciples Moving as One Body in Christ, Bearing Fruit and Being the Salt and Light of the World.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
