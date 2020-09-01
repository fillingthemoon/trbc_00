import React from 'react';

function Vision() {
  return (
    <div id="home-container">
      <div className="top-img-container">
        <img
          className="top-img-exterior"
          src={require("../imgs/exterior.jpg")} 
          alt="" 
        />
        <div className="top-img-title">Mission and Vision</div>
      </div>  
      <div id="mission-vision-container">
        <div id="mv-diagrams-container">
          Diagrams
        </div>
        <div id="mv-text-container">
          <div id="mv-mission-container">
            <h1>Mission</h1>
            <hr id="mv-thickline" />
            <p>
              To Be Disciples Moving as One Body in Christ, Bearing Fruit and
              Being the Salt and Light of the World.
            </p>
          </div>
          <div id="mv-vision-container">
            <h1>Vision</h1>
            <hr id="mv-thickline" />
            <p>
              One Church Growing Inwardly and Outwardly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
