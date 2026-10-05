import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "../../i18n";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="home-about-description">
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
              <b className="purple">{t("home2_body1e_purple")}</b>
              {t("home2_body1f")}
              <br />
              <br />
              {t("home2_body2")}
              <b className="purple">{t("home2_body2_purple")}</b>
              {t("home2_body2b")}
              <b className="purple">{t("home2_body2c_purple")}</b>
              {t("home2_body2d")}
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
