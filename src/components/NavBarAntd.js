import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

const { SubMenu } = Menu;

const NavBarAntd = () => {
  const [windowSize, useSize] = useWindowSize();
  const [current, setCurrent] = useState("home");
  const [language, setLanguage] = useState("English");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const changeLanguage = () => {
    if (language == "English") {
      return setLanguage("Chinese");
    }
    return setLanguage("English");
  };
  const trbcImage = (
    <img
      style={{ maxHeight: '100px', maxWidth: '150px' }}
      src={require('../imgs/logo.png')}
      alt=""
    />
  );

  const menu = (
    <div style ={{display:"flex",justifyContent: "space-between", padding: "10px"}}>
      {windowSize > 1250 ? (
        <div key="logo">
          <Link to="/trbc_00/">{trbcImage}</Link>
        </div>
      ) : null}
      <Menu
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={current}
        style={{ padding: "10px", borderStyle:"none" }}
      >
        <Menu.Item key="home">
          <Link to="/trbc_00/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about us">
          <Link to="/trbc_00/aboutus">About Us</Link>
        </Menu.Item>
        <Menu.Item key="join us">
          <Link to="/trbc_00/joinus">Join Us</Link>
        </Menu.Item>
        <Menu.Item key="i'm new">
          <Link to="/trbc_00/imnew">I'm New</Link>
        </Menu.Item>
        <Menu.Item key="outreach">
          <Link to="/trbc_00/outreach">Outreach</Link>
        </Menu.Item>
        <Menu.Item key="missions">
          {" "}
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
    </div>
  );

  const dropDown = (
    <div
      style={{
<<<<<<< HEAD
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '10px',
        maxHeight: '80px',
=======
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: "10px",
        maxHeight: "85px",
>>>>>>> separated Logo from NavBar
      }}
    >
      <Link to="/trbc_00/">{trbcImage}</Link>
      <Dropdown overlay={menu}>
        <Button icon={<MenuOutlined style={{ fontSize: '25px' }} />} />
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
