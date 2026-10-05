import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { useTranslation } from "../i18n";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { t } = useTranslation();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{t("footer_designed")}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Yassine Ben Hawala</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/hawalayessin"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/yessinbh"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:hawalayessin@gmail.com"
                style={{ color: "white" }}
                title="Email"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+21699866350"
                style={{ color: "white" }}
                title="+216 99 866 350"
              >
                <FaPhone />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
