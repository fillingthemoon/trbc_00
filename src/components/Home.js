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
        <h1 id="img-title">Vision and Mission</h1>
      </div>  
      <div className="mission-vision">
        Mission, Vision
      </div>
    </div>
  );
}

export default Home;
