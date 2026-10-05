import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import myPhoto from "../../Assets/hawalaimg.png";
import Toolstack from "./Toolstack";
import { useTranslation } from "../../i18n";

function About() {
  const { t } = useTranslation();
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                {t("about_title")} <strong className="purple">{t("about_title_purple")}</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "80px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img
                src={myPhoto}
                alt="Yassine Ben Hawala"
                className="img-fluid about-profile-img"
              />
            </Col>
          </Row>
          <div className="resume-info-container" style={{ marginTop: "20px" }}>
            <div className="resume-info-card">
              <h3 className="purple">🎓 Formation</h3>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <span className="resume-date">2023 – 2026</span>
                  <strong>Ingénieur en Génie Informatique — Business Intelligence</strong>
                  <p>École Polytechnique de Sousse (EPS), Sousse, Tunisie</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">2020 – 2023</span>
                  <strong>Licence — Génie Logiciel &amp; Systèmes d'Information</strong>
                  <p>ISIMM, Monastir, Tunisie</p>
                </div>
              </div>
            </div>

            <div className="resume-info-card">
              <h3 className="purple">💼 Expérience</h3>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <span className="resume-date">2025 – 2026</span>
                  <strong>DigMaco Analytics — PFE</strong>
                  <p>Plateforme analytics full-stack · FastAPI · React · ML · Google Gemini</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">Juin – Août 2024</span>
                  <strong>SEO Locale — Stage</strong>
                  <p>Symfony · React TypeScript · Google Business API</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">Jan – Juin 2023</span>
                  <strong>NeuralBey — Stage</strong>
                  <p>E-learning · Symfony · ReactJS · Node.js</p>
                </div>
              </div>
            </div>

            <div className="resume-info-card">
              <h3 className="purple">🏅 Certifications</h3>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <span className="resume-date">2026</span>
                  <strong>Data Analytics — IT Specialist</strong>
                  <p>CertNexus / Certiport — Pearson VUE</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">2024</span>
                  <strong>Microsoft Azure Fundamentals (AZ-900)</strong>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">2024</span>
                  <strong>IT Specialist — Python · Certiport</strong>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">2023</span>
                  <strong>CCNA 1 &amp; CCNA 2 — Cisco</strong>
                </div>
              </div>
            </div>
          </div>

          <h1 className="project-heading">
            {t("about_skillset")} <strong className="purple">{t("about_skillset_purple")} </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">{t("about_tools_purple")}</strong> {t("about_tools")}
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
