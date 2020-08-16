import React, { useState } from "react";
import { Menu, Dropdown, Avatar, Row, Col, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useWindowSize from "../hooks/useWindowSize";
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

      <Menu.Item key="logo">{trbcImage}</Menu.Item>

      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="about us">About Us</Menu.Item>
      <Menu.Item key="join us">Join Us</Menu.Item>
      <Menu.Item key="i'm new">I'm New</Menu.Item>
      <Menu.Item key="outreach">Outreach</Menu.Item>
      <Menu.Item key="missions">Missions</Menu.Item>
      <Menu.Item key="discipleship">Discipleship</Menu.Item>
      <Menu.Item key="facilities">Facility Bookings</Menu.Item>
      <Menu.Item key="resoucres">Resources</Menu.Item>
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
