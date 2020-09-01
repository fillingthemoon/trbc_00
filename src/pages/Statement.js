import React from "react";
import { Typography, Row, Col, Card } from "antd";
function Statement() {
  const { Title } = Typography;
  var styles = {
    container: {
      width: "80%",
      margin: "auto",
      textAlign: "center",
    },
    thickLine: {
      width: "35px",
      height: "4px",
      backgroundColor: "#F37021",
      borderStyle: "none",
    },

    verseStyle: {
      textAlign: "right",
      position: "absolute",
      bottom: "10px",
      right: "20px",
    },
  };
  const data = [
    {
      text:
        "That the whole Bible, comprising both Old and New Testaments,\bold was written under the inspiration of God. The Bible is the basis of our faith, and a guide for our lives.",
      verse: "2 Tim 3:16",
      background: "#F2F2F2",
    },
    {
      text:
        "In God as the everlasting Triune God, who is united in the Father,\bold the Son and the Holy Spirit, who are equal in power and position.",
      verse: "2 Tim 3:16",

      background: "#E0E0E0",
    },
    {
      text:
        "That those who are saved by the blood of Jesus Christ are united with Him in spirit.\bold We also believe that the church of Christ should keep to the purity of faith in accordance to biblical doctrine, and be committed to the task of accomplishing the Great Commission. ",
      verse: "2 Tim 3:16",
      background: "#F2F2F2",
    },
    {
      text:
        "That the whole Bible, comprising both Old and New Testaments,\bold was written under the inspiration of God. The Bible is the basis of our faith, and a guide for our lives.",
      verse: "2 Tim 3:16",
      background: "#F2F2F2",
    },
    {
      text:
        "In God as the everlasting Triune God, who is united in the Father,\bold the Son and the Holy Spirit, who are equal in power and position.",
      verse: "2 Tim 3:16",

      background: "#E0E0E0",
    },
    {
      text:
        "That those who are saved by the blood of Jesus Christ are united with Him in spirit.\bold We also believe that the church of Christ should keep to the purity of faith in accordance to biblical doctrine, and be committed to the task of accomplishing the Great Commission. ",
      verse: "2 Tim 3:16",
      background: "#F2F2F2",
    },
  ];
  var key = 0;
  return (
    <div>
      <div className="top-img-container">
        <img
          className="top-img-exterior"
          src={require("../imgs/exterior.jpg")}
          alt=""
        />
        <div className="top-img-title">Statement of Faith</div>
      </div>
      <div style={styles.container}>
        <br />
        <br />
        <Title>We Believe</Title>
        <hr style={styles.thickLine}></hr>
        <br />
        <br />
        <Row gutter={[60, 60]}>
          {data.map((card) => {
            key++;
            return (
              <Col
                xs={{ span: 11, offset: 1 }}
                lg={{ span: 7, offset: 1 }}
                key={key + 1}
              >
                <Card
                  bodyStyle={{
                    height: "250px",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: card.background,
                  }}
                >
                  <p style={{ textAlign: "left" }}>
                    {/* Need a better way to bold first few text */}
                    <strong>{card.text.split("\bold")[0]}</strong>
                    {card.text.split("\bold")[1]}
                  </p>

                  <p style={styles.verseStyle}>{card.verse}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Statement;
