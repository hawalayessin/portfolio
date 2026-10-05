import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useTranslation } from "../../i18n";
import digmaco from "../../Assets/Projects/digmaco.png";
import etl from "../../Assets/Projects/etl.png";
import seo from "../../Assets/Projects/seo.png";
import stadium from "../../Assets/Projects/stadium.png";
import microservices from "../../Assets/Projects/microservices.png";
import neuralbey from "../../Assets/Projects/neuralbey.png";

const projectsFr = [
  {
    imgPath: digmaco,
    isBlog: false,
    title: "DigMaco Analytics",
    description:
      "Plateforme full-stack d'analyse comportementale pour opérateur télécom. Pipeline ETL complet (Extract-Transform-Load), modules ML (churn, segmentation K-Means, détection d'anomalies), génération de rapports IA via Google Gemini et export PDF automatisé.",
    ghLink: "https://github.com/hawalayessin",
    techTags: ["FastAPI", "React", "PostgreSQL", "scikit-learn", "Docker", "Gemini"],
  },
  {
    imgPath: etl,
    isBlog: false,
    title: "User Behavior Analytics — ETL",
    description:
      "Pipeline ETL complet reliant une base de production à un entrepôt analytique. Mapping UUID5 déterministe, stratégie d'upsert, parallélisation asynchrone. Réduction de plus de 75% du temps de réponse backend.",
    ghLink: "https://github.com/hawalayessin/user-behavior-analytics",
    techTags: ["Python", "Pandas", "PostgreSQL", "Alembic", "JWT", "Docker"],
  },
  {
    imgPath: seo,
    isBlog: false,
    title: "SEO Locale Platform",
    description:
      "Plateforme de gestion et synchronisation des fiches Google Business Profile avec analyse statistique via Google Analytics API. Interface React/TypeScript connectée à un backend Symfony.",
    ghLink: "https://github.com/hawalayessin",
    techTags: ["Symfony", "React", "TypeScript", "MySQL", "Google API", "Docker"],
  },
  {
    imgPath: stadium,
    isBlog: false,
    title: "Stadium Reservation — MERN",
    description:
      "Application web temps réel de réservation de stades avec authentification JWT. Intégration de Google Gemini pour l'analyse automatisée des avis utilisateurs.",
    ghLink: "https://github.com/hawalayessin",
    techTags: ["React", "Vite", "Node.js", "MongoDB", "JWT", "Gemini"],
  },
  {
    imgPath: microservices,
    isBlog: false,
    title: "Architecture Microservices SOA",
    description:
      "Architecture distribuée orientée microservices avec communication synchrone (gRPC) et asynchrone (Kafka). Exposition via REST et GraphQL.",
    ghLink: "https://github.com/hawalayessin/SOAEXA",
    techTags: ["gRPC", "Kafka", "REST", "GraphQL", "JavaScript"],
  },
  {
    imgPath: neuralbey,
    isBlog: false,
    title: "NeuralBey — E-learning",
    description:
      "Plateforme e-learning modulaire, scalable et sécurisée. Développement complet du frontend et backend avec gestion des cours, utilisateurs et certifications.",
    ghLink: "https://github.com/hawalayessin",
    techTags: ["Symfony", "ReactJS", "Node.js", "MySQL", "Scrum"],
  },
];

const projectsEn = [
  {
    imgPath: digmaco,
    isBlog: false,
    title: "DigMaco Analytics",
    description:
      "Full-stack behavioral analytics platform for a telecom operator. Complete ETL pipeline (Extract-Transform-Load), ML modules (churn prediction, K-Means segmentation, anomaly detection), AI report generation via Google Gemini with automated PDF export.",
    ghLink: "https://github.com/hawalayessin",
    techTags: ["FastAPI", "React", "PostgreSQL", "scikit-learn", "Docker", "Gemini"],
  },
  {
    imgPath: etl,
    isBlog: false,
    title: "User Behavior Analytics — ETL",
    description:
      "Complete ETL pipeline bridging a production database to an analytical data warehouse. Deterministic UUID5 key mapping, upsert load strategy, async parallelization. Reduced backend response time by 75%+.",
    ghLink: "https://github.com/hawalayessin/user-behavior-analytics",
    techTags: ["Python", "Pandas", "PostgreSQL", "Alembic", "JWT", "Docker"],
  },
  {
    imgPath: seo,
    isBlog: false,
    title: "SEO Locale Platform",
    description:
      "Google Business Profile management and synchronization platform with statistical analysis via the Google Analytics API. React/TypeScript frontend connected to a Symfony backend.",
    ghLink: "https://github.com/hawalayessin",
    techTags: ["Symfony", "React", "TypeScript", "MySQL", "Google API", "Docker"],
  },
  {
    imgPath: stadium,
    isBlog: false,
    title: "Stadium Reservation — MERN",
    description:
      "Real-time stadium seat reservation web app with JWT authentication. Integrated Google Gemini for automated user review analysis.",
    ghLink: "https://github.com/hawalayessin",
    techTags: ["React", "Vite", "Node.js", "MongoDB", "JWT", "Gemini"],
  },
  {
    imgPath: microservices,
    isBlog: false,
    title: "Microservices SOA Architecture",
    description:
      "Distributed microservices architecture with synchronous (gRPC) and asynchronous (Kafka) communication. Exposed through REST and GraphQL endpoints.",
    ghLink: "https://github.com/hawalayessin/SOAEXA",
    techTags: ["gRPC", "Kafka", "REST", "GraphQL", "JavaScript"],
  },
  {
    imgPath: neuralbey,
    isBlog: false,
    title: "NeuralBey — E-learning",
    description:
      "Modular, scalable, and secure e-learning platform. Complete frontend and backend development with course management, users, and certifications.",
    ghLink: "https://github.com/hawalayessin",
    techTags: ["Symfony", "ReactJS", "Node.js", "MySQL", "Scrum"],
  },
];

function Projects() {
  const { t, lang } = useTranslation();
  const projects = lang === "fr" ? projectsFr : projectsEn;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects_title")} <strong className="purple">{t("projects_title_purple")} </strong>
        </h1>
        <p style={{ color: "white" }}>{t("projects_subtitle")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((proj, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={proj.imgPath}
                isBlog={proj.isBlog}
                title={proj.title}
                description={proj.description}
                ghLink={proj.ghLink}
                demoLink={proj.demoLink}
                techTags={proj.techTags}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
