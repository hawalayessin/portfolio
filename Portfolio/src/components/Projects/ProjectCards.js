import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsDownload, BsArrowsFullscreen, BsFileEarmarkPdf } from "react-icons/bs";
import { useTranslation } from "../../i18n";
import ProjectGallery from "./ProjectGallery";

function ProjectCards(props) {
  const { t } = useTranslation();
  const [showPreview, setShowPreview] = useState(false);
  return (
    <>
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.techTags && (
          <div className="tech-tags">
            {props.techTags.map((tag, i) => (
              <span key={i} className="tech-tag">{tag}</span>
            ))}
          </div>
        )}

        <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {props.screenshots && props.screenshots.length > 0 && (
            <ProjectGallery images={props.screenshots} title={props.title} />
          )}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer">
              <BsGithub /> &nbsp;
              {props.isBlog ? t("projects_github") : "GitHub"}
            </Button>
          )}
          {props.previewLink && (
            <Button variant="primary" onClick={() => setShowPreview(true)}>
              <BsArrowsFullscreen /> &nbsp;
              {t("projects_preview")}
            </Button>
          )}
          {props.downloadLink && (
            <Button variant="primary" href={props.downloadLink} download>
              <BsDownload /> &nbsp;
              {t("projects_download_report")}
            </Button>
          )}
          {props.documentLink && (
            <Button variant="primary" href={props.documentLink} target="_blank" rel="noopener noreferrer">
              <BsFileEarmarkPdf /> &nbsp;
              {t("projects_document")}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp;
              {t("projects_demo")}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
    {props.previewLink && (
      <Modal
        show={showPreview}
        onHide={() => setShowPreview(false)}
        centered
        size="xl"
        aria-labelledby={`dashboard-preview-${props.title.replace(/\s+/g, "-")}`}
      >
        <Modal.Header closeButton closeVariant="white" closeLabel={t("projects_close")} style={{ background: "#171923", color: "#f4f4f5" }}>
          <Modal.Title id={`dashboard-preview-${props.title.replace(/\s+/g, "-")}`}>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#10121b", textAlign: "center" }}>
          {showPreview && (
            <img
              src={props.previewLink}
              alt={props.title}
              style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer style={{ background: "#171923" }}>
          <Button variant="secondary" onClick={() => setShowPreview(false)}>
            {t("projects_close")}
          </Button>
        </Modal.Footer>
      </Modal>
    )}
    </>
  );
}

export default ProjectCards;
