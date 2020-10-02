import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const { SubMenu } = Menu;

const NavBarAntd = () => {
  const [windowSize, useSize] = useWindowSize();
  const [current, setCurrent] = useState("home");
  const [language, setLanguage] = useState("ENGLISH");

  const changeLanguage = () => {
    if (language === "ENGLISH") {
      return setLanguage("中文");
    }
    return setLanguage("ENGLISH");
  };
  const trbcImage = (
    <img
      style={{ maxHeight: "100px", maxWidth: "150px" }}
      src={require("../imgs/logo.png")}
      alt=""
    />
  );

  const menu = (
    <>
      <Menu
        mode={windowSize > 1370 ? "horizontal" : "vertical"}
        onClick={(e) => {
          setCurrent(e.key);
        }}
        selectedKeys={current}
        style={{ border: "None", padding: "10px" }}
      >
        <Menu.Item key="home" title="Home" >
          <Link to="/trbc_00/">Home</Link>
        </Menu.Item>

        <SubMenu key="aboutUs" style={{fontSize: "17px"}} title="About Us"> 
        {/* Need find way to change font */}
          <Menu.Item key="aboutUs1"><Link to="/trbc_00/vision">Vision & Mission</Link></Menu.Item>
          <Menu.Item key="aboutUs2"><Link to="/trbc_00/ourhistory">Our History</Link></Menu.Item>
          <Menu.Item key="aboutUs3"><Link to="/trbc_00/ourteam">Our Team</Link></Menu.Item>
          <Menu.Item key="aboutUs4"><Link to="/trbc_00/statement">Statement of Faith</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="joinUs" style={{fontSize: "17px"}} title="Join Us"> 
        {/* Need find way to change font */}
          <Menu.Item key="services"><Link to="/trbc_00/services">Services</Link></Menu.Item>
          <Menu.Item key="church-wide"><Link to="/trbc_00/church-wide">Church-Wide</Link></Menu.Item>

          <SubMenu key="tc" style={{fontSize: "17px"}} title="Teo Chew/Chinese Congregation"> 
        {/* Need find way to change font */}
          <Menu.Item key="tc/sundayschool"><Link to="/trbc_00/tc/sundayschool">Sunday School</Link></Menu.Item>
          <Menu.Item key="tc/prayermeeting"><Link to="/trbc_00/tc/prayermeeting">Prayer Meetings</Link></Menu.Item>
          <Menu.Item key="tc/connectgroups"><Link to="/trbc_00/tc/connectgroups">Connect Groups</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sunset" style={{fontSize: "17px"}} title="Sunset Congregation"> 
        {/* Need find way to change font */}
          <Menu.Item key="s/sundayschool"><Link to="/trbc_00/s/sundayschool">Sunday School</Link></Menu.Item>
          <Menu.Item key="s/prayermeeting"><Link to="/trbc_00/s/prayermeeting">Prayer Meetings</Link></Menu.Item>
          <Menu.Item key="s/connectgroups"><Link to="/trbc_00/s/connectgroups">Connect Groups</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="english" style={{fontSize: "17px"}} title="English Congregation"> 
        {/* Need find way to change font */}
          <Menu.Item key="e/sundayschool"><Link to="/trbc_00/e/sundayschool">Sunday School</Link></Menu.Item>
          <Menu.Item key="e/prayermeeting"><Link to="/trbc_00/e/prayermeeting">Prayer Meetings</Link></Menu.Item>
          <Menu.Item key="e/connectgroups"><Link to="/trbc_00/e/connectgroups">Connect Groups</Link></Menu.Item>
        </SubMenu>
          
        </SubMenu>
        <Menu.Item key="imNew">
          <Link to="/trbc_00/imnew">I'm New</Link>
        </Menu.Item>
        <Menu.Item key="outreach">
          <Link to="/trbc_00/outreach">Outreach</Link>
        </Menu.Item>
        <Menu.Item key="missions">
          <Link to="/trbc_00/missions">Missions</Link>
        </Menu.Item>
        <Menu.Item key="discipleship">
          <Link to="/trbc_00/discipleship">Discipleship</Link>
        </Menu.Item>
        <Menu.Item key="facilities">
          <Link to="/trbc_00/facilitybookings">Facility Bookings</Link>
        </Menu.Item>
        <Menu.Item key="resoucres">
          <Link to="/trbc_00/resources">Resources</Link>
        </Menu.Item>
        <Menu.Item key="language">
          <Button
            onClick={changeLanguage}
            style={{
              backgroundColor: "#ffe7ba",
              color: "#fa8c16",
              borderRadius: "5px",
              borderStyle: "none",
            }}
          >
            {language}
          </Button>
        </Menu.Item>
      </Menu>
    </>
  );

  const dropDown = (
    <>
      <Dropdown overlay={menu}>
        <Button icon={<MenuOutlined style={{ fontSize: "25px" }} />} />
      </Dropdown>
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: "55px",
        maxHeight: "80px",
      }}
    >
      <Link to="/trbc_00/">{trbcImage}</Link>
      {console.log(windowSize)}
      {windowSize > 1370 ? menu : dropDown}
    </div>
  );
};
export default NavBarAntd;
