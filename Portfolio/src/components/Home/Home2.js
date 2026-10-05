import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../../Assets/hawalaimg.png";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "../../i18n";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2_title")}{" "}
              <span className="purple">{t("home2_title_purple")}</span>
            </h1>
            <p className="home-about-body">
              {t("home2_body1")}
              <i>
                <b className="purple">{t("home2_body1_purple")}</b>
              </i>
              {t("home2_body1b")}
              <b className="purple">{t("home2_body1c_purple")}</b>
              {t("home2_body1d")}
              <br />
              <br />
              {t("home2_body2")}
              <i>
                <b className="purple">{t("home2_body2_purple")}</b>
              </i>
              {t("home2_body2b")}
              <br />
              <br />
              {t("home2_body3")}
              <b className="purple">{t("home2_body3_purple")}</b>
              {t("home2_body3b")}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myPhoto}
                className="img-fluid home-about-photo"
                alt="Yassine Ben Hawala"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
