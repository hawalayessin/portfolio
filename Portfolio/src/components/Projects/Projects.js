import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { getProjects } from "./projectData";
import { useTranslation } from "../../i18n";

function Projects() {
  const { t, lang } = useTranslation();
  const [category, setCategory] = useState("all");
  const projects = getProjects(lang).filter(project => category === "all" || project.category === category);
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">{t("projects_title")} <strong className="purple">{t("projects_title_purple")}</strong></h1>
        <p className="resume-intro">{t("projects_subtitle")}</p>
        <div className="project-filter" role="group" aria-label={t("projects_filter")}>
          {["all", "web", "data"].map(value => <button type="button" key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>{t(`projects_filter_${value}`)}</button>)}
        </div>
        <p className="project-result-count" role="status">{projects.length} {t("projects_count")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {projects.map(project => <Col lg={4} md={6} className="project-card" key={project.id}><ProjectCard {...project} /></Col>)}
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
