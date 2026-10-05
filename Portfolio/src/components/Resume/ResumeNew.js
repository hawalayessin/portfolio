import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { useTranslation } from "../../i18n";

const cvUrl = `${process.env.PUBLIC_URL}/cvhawala.pdf`;

function ResumeNew() {
  const { t } = useTranslation();

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading" style={{ textAlign: "center", paddingBottom: "20px" }}>
          {t("resume_title")} <strong className="purple">{t("resume_title_purple")}</strong>
        </h1>
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "20px" }}>
          <div
            style={{
              maxWidth: "930px",
              width: "100%",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
              padding: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "rgba(123, 74, 173, 0.12)",
                borderRadius: "12px 12px 0 0",
                padding: "12px 16px",
                color: "#fff",
                fontWeight: 600,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span>CV Preview</span>
              <span style={{ fontSize: "0.8rem", opacity: 0.8 }}>PDF</span>
            </div>
            <iframe
              src={cvUrl}
              title="CV Yassine Ben Hawala"
              style={{ width: "100%", minHeight: "900px", border: "none", display: "block", background: "#fff" }}
            />
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "10px", paddingBottom: "30px" }}>
          <Button
            variant="primary"
            href={cvUrl}
            download="cvhawala.pdf"
            style={{
              maxWidth: "260px",
              borderRadius: "50px",
              padding: "12px 24px",
              fontWeight: 600,
              background: "linear-gradient(135deg, #6a4c93 0%, #9a5de4 100%)",
              border: "none",
              boxShadow: "0 10px 24px rgba(154, 93, 228, 0.35)",
            }}
          >
            <AiOutlineDownload />
            &nbsp;{t("resume_download")}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
