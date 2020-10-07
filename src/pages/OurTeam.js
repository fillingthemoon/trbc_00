import React from "react";
import { Divider, Typography, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
function OurTeam() {
  const { Title } = Typography;
  var styles = {

    thickLine: {
      width: "35px",
      height: "4px",
      backgroundColor: "#F37021",
      borderStyle: "none",
    },
  };
  var data = [
    {
      groupName: "Sunset",
      key: "Sunset",
      staff: [
        {
          key: 1,
          name: "Rev Dr Jerry Goh",
          role: "Pastor of English Congregation",
          image: "",
        },
        {
          key: 2,
          name: "Rev Andrew Chang",
          role: "Interim Pastoral Advisor of \n Teochew/Chinese Congregation",
          image: "",
        },
      ],
    },
    {
      groupName: "Chinese/Teo Chew",
      key: "Chinese/Teo Chew",
      staff: [
        {
          key: 3,
          name: "Rev Dr Jerry Goh",
          role: "Pastor of English Congregation",
          image: "",
        },
        {
          key: 4,
          name: "Rev Andrew Chang",
          role: "Interim Pastoral Advisor of \n Teochew/Chinese Congregation",
          image: "",
        },
        {
          key: 5,
          name: "Ps Lam Yuen Foong",
          role: "Pastor of Sunset Congregation",
          image: "",
        },
      ],
    },
    {
      groupName: "English",
      key: "English",
      staff: [
        {
          key: 6,
          name: "Rev Dr Jerry Goh",
          role: "Pastor of English Congregation",
          image: "",
        },
        {
          key: 7,
          name: "Rev Andrew Chang",
          role: "Interim Pastoral Advisor of \n Teochew/Chinese Congregation",
          image: "",
        },
        {
          key: 8,
          name: "Ps Lam Yuen Foong",
          role: "Pastor of Sunset Congregation",
          image: "",
        },
      ],
    },
    {
      groupName: "Ministry",
      key: "Ministry",
      staff: [
        {
          key: 9,
          name: "Rev Dr Jerry Goh",
          role: "Pastor of English Congregation",
          image: "",
        },
        {
          key: 10,
          name: "Rev Andrew Chang",
          role: "Interim Pastoral Advisor of \n Teochew/Chinese Congregation",
          image: "",
        },
      ],
    },
    {
      groupName: "Administrative",
      key: "Admin",
      staff: [
        {
          key: 11,
          name: "Rev Dr Jerry Goh",
          role: "Pastor of English Congregation",
          image: "",
        },
        {
          key: 12,
          name: "Rev Andrew Chang",
          role: "Interim Pastoral Advisor of \n Teochew/Chinese Congregation",
          image: "",
        },
        {
          key: 13,
          name: "Rev Dr Jerry Goh",
          role: "Pastor of English Congregation",
          image: "",
        },
        {
          key: 14,
          name: "Rev Andrew Chang",
          role: "Interim Pastoral Advisor of \n Teochew/Chinese Congregation",
          image: "",
        },
        {
          key: 15,
          name: "Rev Dr Jerry Goh",
          role: "Pastor of English Congregation",
          image: "",
        },
      ],
    },
  ];

  return (
    <>
      <div className="top-img-container">
        <img
          className="top-img-exterior"
          src={require("../imgs/exterior.jpg")}
          alt=""
        />
        <div className="top-img-title">Our Team</div>
      </div>
      <div className="main-container">
        <br />
        <br />
        <Title>Pastoral</Title>
        <hr className="thick-line"></hr>

        {/* Use map to render reusable HTML content */}
        {data.map((group) => {
          return (
            <>
              {/* if groupName is "Mnistry" or "Administrative" it will render different title types */}
              {group.groupName === "Ministry" ||
              group.groupName === "Administrative" ? (
                <>
                  <Divider />
                  <Title style={{ textAlign: "center" }}>
                    {group.groupName}
                  </Title>
                  <hr className="thick-line"></hr>
                  <br />
                  <br />
                </>
              ) : (
                <>
                  <Divider orientation="left">
                    <Title level={3}>{group.groupName}</Title>
                  </Divider>
                </>
              )}
              {/* if groupName is "Mnistry" or "Administrative" it will render different styles of the justify property */}
              <Row
                justify={
                  group.groupName === "Ministry" ||
                  group.groupName === "Administrative"
                    ? "space-around"
                    : "start"
                }
              >
                {group.staff.map((staff) => {
          
                  return (
                    <Col
                      sm={24}
                      lg={8}
                      style={{ display: "flex", justifyContent: "center" }}
                      key={staff.key}
                    >
                      <div style={{ textAlign: "center" }} >
                        <Avatar size={120} icon={<UserOutlined />} />

                        <p style={{ marginTop: "20px" }}>
                          <strong>{staff.name}</strong>
                          <br />
                          {/* Need a better way to insert newline */}
                          {staff.role.split("\n").map((i) => {
                            return (
                              <>
                                {i}
                                <br />
                              </>
                            );
                          })}
                        </p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </>
          );
        })}
        <br />
      </div>
    </>
  );
}

export default OurTeam;
