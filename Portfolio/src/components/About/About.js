import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import myPhoto from "../../Assets/hawalaimg.png";
import Toolstack from "./Toolstack";
import CertificateGallery from "./CertificateGallery";
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
              <h3 className="purple">🎓 {t("about_education_title")}</h3>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <span className="resume-date">{t("about_education_1_year")}</span>
                  <strong>{t("about_education_1_title")}</strong>
                  <p>{t("about_education_1_place")}</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">{t("about_education_2_year")}</span>
                  <strong>{t("about_education_2_title")}</strong>
                  <p>{t("about_education_2_place")}</p>
                </div>
              </div>
            </div>

            <div className="resume-info-card">
              <h3 className="purple">💼 {t("about_experience_title")}</h3>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <span className="resume-date">{t("about_experience_1_year")}</span>
                  <strong>{t("about_experience_1_title")}</strong>
                  <p>{t("about_experience_1_desc")}</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">{t("about_experience_2_year")}</span>
                  <strong>{t("about_experience_2_title")}</strong>
                  <p>{t("about_experience_2_desc")}</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">{t("about_experience_3_year")}</span>
                  <strong>{t("about_experience_3_title")}</strong>
                  <p>{t("about_experience_3_desc")}</p>
                </div>
              </div>
            </div>

            <div className="resume-info-card">
              <h3 className="purple">🏅 {t("about_certifications_title")}</h3>
              <div className="resume-timeline">
                <div className="resume-timeline-item">
                  <span className="resume-date">{t("about_cert_1_year")}</span>
                  <strong>{t("about_cert_1_title")}</strong>
                  <p>{t("about_cert_1_desc")}</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">{t("about_cert_2_year")}</span>
                  <strong>{t("about_cert_2_title")}</strong>
                  <p>{t("about_cert_2_desc")}</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">{t("about_cert_3_year")}</span>
                  <strong>{t("about_cert_3_title")}</strong>
                  <p>{t("about_cert_3_desc")}</p>
                </div>
                <div className="resume-timeline-item">
                  <span className="resume-date">{t("about_cert_4_year")}</span>
                  <strong>{t("about_cert_4_title")}</strong>
                  <p>{t("about_cert_4_desc")}</p>
                </div>
              </div>
            </div>
          </div>

          <CertificateGallery />

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
