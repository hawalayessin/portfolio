import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../../Assets/hawalaimg.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { useTranslation } from "../../i18n";

function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("home_greeting")}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {t("home_iam")}
                <strong className="main-name"> YASSINE BEN HAWALA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="home-photo-col">
              <div className="home-photo-wrapper">
                <img
                  src={myPhoto}
                  alt="Yassine Ben Hawala"
                  className="home-profile-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>{t("home_find_me")}</h1>
            <p>
              {t("home_connect")}{" "}
              <span className="purple">{t("home_connect2")}</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hawalayessin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/yessinbh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hawalayessin@gmail.com"
                  className="icon-colour home-social-icons"
                  title="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+21699866350"
                  className="icon-colour home-social-icons"
                  title="+216 99 866 350"
                >
                  <FaPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
