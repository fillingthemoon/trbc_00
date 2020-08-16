import React, { useState } from "react";
import { Menu, Dropdown, Avatar, Row, Col, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useWindowSize from "../hooks/useWindowSize";
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const NavBarAntd = () => {
  const [windowSize, useSize] = useWindowSize();
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const trbcImage = (
    <img
      style={{ maxHeight: "100px", maxWidth: "150px" }}
      src={require("../imgs/logo.png")}
    />
  );
  const menu = (
    <Menu mode="horizontal" onClick={handleClick} selectedKeys={current} style={{padding:"10px"}}>

      <Menu.Item key="logo">
      <Link to="/trbc_00/" >
        {trbcImage}
        </Link>
        </Menu.Item>

    
      <Menu.Item key="home">
      <Link to="/trbc_00/" >Home
      </Link></Menu.Item>

      <Menu.Item key="about us">
      <Link to="/trbc_00/aboutus">About Us</Link>
      </Menu.Item>
  
      <Menu.Item key="join us">
      <Link to="/trbc_00/joinus" >
        Join Us
        </Link>
        </Menu.Item>

      <Menu.Item key="i'm new">
      <Link to="/trbc_00/imnew" >I'm New
      </Link></Menu.Item>
      <Menu.Item key="outreach">
      <Link to="/trbc_00/outreach" >Outreach</Link></Menu.Item>
      <Menu.Item key="missions"> <Link to="/trbc_00/missions" >
        Missions</Link></Menu.Item>
      <Menu.Item key="discipleship">
      <Link to="/trbc_00/discipleship" >Discipleship
      </Link></Menu.Item>
      <Menu.Item key="facilities">
      <Link to="/trbc_00/facilitybookings">Facility Bookings
      </Link></Menu.Item>
      <Menu.Item key="resoucres">
      <Link to="/trbc_00/resources" >Resources</Link></Menu.Item>
      <SubMenu title={<span>Congregations</span>}>
        <Menu.ItemGroup>
          <Menu.Item key="english">English</Menu.Item>
          <Menu.Item key="chinese">Chinese</Menu.Item>
          <Menu.Item key="sunset">Sunset</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
 
    </Menu>
  );
  const dropDown = (
      <div style ={{backgroundColor:"white", padding:"10px"}}>
                <Dropdown overlay={menu} className="ant-dropdown-link" >
        <a onClick={(e) => e.preventDefault()}>
          <MenuOutlined style={{ fontSize: "25px" }} />
        </a>
      </Dropdown>

      </div>
  );

  return (
    <>
      {windowSize > 1250 ? menu : dropDown}
      {console.log(windowSize)}

    </>
  );
};
export default NavBarAntd;
