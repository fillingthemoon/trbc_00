import React from "react";
import { Carousel, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
function Home() {
  return (
    <div>
      <div className="top-img-container">
        <img
          className="top-img-exterior"
          src={require("../imgs/exterior.jpg")}
          alt=""
        />
        <div className="top-img-title">TRBC</div>
      </div>
      <br />
      <br />

      <Carousel autoplay>
        <div>
          <Image
            src="https://trbccec.files.wordpress.com/2020/08/trbc-cec-2020-snapshot-.png"
          />
        </div>
        <div>
          <Image 
            src="http://www.trbc.org.sg/images/Images/English_Invite_Come__Celebrate_Christmas_1_Dec.png"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
