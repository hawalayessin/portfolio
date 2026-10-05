import React, { useState } from "react";
import { Row, Col, Card, Modal } from "react-bootstrap";
import { useTranslation } from "../../i18n";

const certificates = [
  {
    title: "Data Analytics",
    issuer: "CertNexus / Certiport",
    year: "2026",
    image: `${process.env.PUBLIC_URL}/certifications/dataanalytics.png`,
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2024",
    image: `${process.env.PUBLIC_URL}/certifications/azurefund.png`,
  },
  {
    title: "IT Specialist — Python",
    issuer: "Certiport",
    year: "2024",
    image: `${process.env.PUBLIC_URL}/certifications/python.png`,
  },
  {
    title: "CCNA 1",
    issuer: "Cisco",
    year: "2023",
    image: `${process.env.PUBLIC_URL}/certifications/ccna1.png`,
  },
  {
    title: "TOEIC",
    issuer: "ETS Global",
    year: "Certification",
    image: `${process.env.PUBLIC_URL}/certifications/toeic.png`,
  },
];

function CertificateGallery() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const { t } = useTranslation();

  return (
    <>
      <div className="certificates-section">
        <div className="certificates-header">
          <h3 className="purple">🏅 {t("about_certifications_title")}</h3>
          <p>{t("cert_gallery_description") || "Quelques preuves concrètes de mon parcours en data, cloud, Python et réseaux."}</p>
        </div>

        <Row className="g-4 justify-content-center">
          {certificates.map((cert) => (
            <Col key={cert.title} xs={12} sm={6} lg={4} xl={3}>
              <Card className="certificate-card h-100">
                <button
                  type="button"
                  className="certificate-media-button"
                  onClick={() => setSelectedCertificate(cert)}
                  aria-label={`Agrandir ${cert.title}`}
                >
                  <div className="certificate-media">
                    <img src={cert.image} alt={cert.title} className="certificate-image" />
                    <span className="certificate-year">{cert.year}</span>
                    <span className="certificate-zoom-hint">{t("cert_gallery_zoom") || "Cliquer pour agrandir"}</span>
                  </div>
                </button>
                <Card.Body className="certificate-body">
                  <Card.Title className="certificate-title">{cert.title}</Card.Title>
                  <Card.Text className="certificate-meta">{cert.issuer}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        show={Boolean(selectedCertificate)}
        onHide={() => setSelectedCertificate(null)}
        centered
        size="lg"
        className="certificate-modal"
      >
        <Modal.Header closeButton className="certificate-modal-header">
          <Modal.Title>{selectedCertificate?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="certificate-modal-body">
          {selectedCertificate && (
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="certificate-modal-image"
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CertificateGallery;