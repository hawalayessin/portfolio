import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useTranslation } from "../../i18n";
import digmacoScreenshots from "./digmacoScreenshots";
import etl from "../../Assets/Projects/etl.png";
import seo from "../../Assets/Projects/seo.png";
import stadium from "../../Assets/Projects/stadium.png";
import microservices from "../../Assets/Projects/microservices.png";
import neuralbey from "../../Assets/Projects/neuralbey.png";

const carSalesPreview = `${process.env.PUBLIC_URL}/projects/car-sales/dashboard.png`;
const carSalesReport = `${process.env.PUBLIC_URL}/projects/car-sales/car-sales.pbix`;
const fifaProjectPath = `${process.env.PUBLIC_URL}/projects/fifa-world-cup`;

const projectsFr = [
  {
    imgPath: `${fifaProjectPath}/dashboard.png`,
    title: "FIFA World Cup — Data Analytics & BI",
    description:
      "Projet académique sur les Coupes du Monde de 1930 à 2014. Préparation des données CSV avec Python et Pandas : dédoublonnage, jointures et calcul des buts. Modélisation en étoile sous SQLite, puis dashboard Power BI pour explorer les matchs, les buts et l'affluence par édition, pays hôte, stade et phase de compétition.",
    previewLink: `${fifaProjectPath}/dashboard.png`,
    downloadLink: `${fifaProjectPath}/fifa-world-cup.pbix`,
    documentLink: `${fifaProjectPath}/rapport.pdf`,
    techTags: ["Power BI", "Python", "Pandas", "SQLite", "ETL", "Data Warehouse"],
  },
  {
    imgPath: carSalesPreview,
    title: "Car Sales — Power BI",
    description:
      "Tableau de bord interactif d'analyse des ventes automobiles à partir de données Excel. Suivi des ventes cumulées (YTD), du prix moyen et du nombre de véhicules vendus, tendance hebdomadaire et répartition par carrosserie, couleur, constructeur et région. Filtres par moteur, carrosserie, région et gamme de prix.",
    previewLink: carSalesPreview,
    downloadLink: carSalesReport,
    techTags: ["Power BI", "Excel", "Business Intelligence", "Data Visualization"],
  },
  {
    imgPath: digmacoScreenshots[0].src,
    screenshots: digmacoScreenshots,
    isBlog: false,
    title: "DigMaco Analytics",
    description:
      "Plateforme full-stack d'analyse comportementale pour opérateur télécom. Pipeline ETL complet (Extract-Transform-Load), modules ML (churn, segmentation K-Means, détection d'anomalies), génération de rapports IA via Google Gemini et export PDF automatisé.",
    ghLink: "https://github.com/hawalayessin/user-behavior-analytics",
    techTags: ["FastAPI", "React", "PostgreSQL", "scikit-learn", "Docker", "Gemini"],
  },
  {
    imgPath: etl,
    isBlog: false,
    title: "DigMaco — Composant ETL",
    description:
      "Composant du même PFE DigMaco. Pipeline ETL reliant une base de production à un entrepôt analytique. Mapping UUID5 déterministe, stratégie d'upsert, parallélisation asynchrone. Réduction de plus de 75% du temps de réponse backend.",
    ghLink: "https://github.com/hawalayessin/user-behavior-analytics",
    techTags: ["Python", "Pandas", "PostgreSQL", "Alembic", "JWT", "Docker"],
  },
  {
    imgPath: seo,
    isBlog: false,
    title: "SEO Locale Platform",
    description:
      "Plateforme de gestion et synchronisation des fiches Google Business Profile avec analyse statistique via Google Analytics API. Interface React/TypeScript connectée à un backend Symfony.",

    techTags: ["Symfony", "React", "TypeScript", "MySQL", "Google API", "Docker"],
  },
  {
    imgPath: stadium,
    isBlog: false,
    title: "Stadium Reservation — MERN",
    description:
      "Application MERN de réservation de stades avec authentification JWT. Gestion des créneaux disponibles, réservation et annulation, espace d'administration des stades et des disponibilités. Avis et notes des utilisateurs, avec synthèse des commentaires via Google Gemini.",
    ghLink: "https://github.com/hawalayessin/reservation-stade-module-mern-2026",
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

    techTags: ["Symfony", "ReactJS", "Node.js", "MySQL", "Scrum"],
  },
];

const projectsEn = [
  {
    imgPath: `${fifaProjectPath}/dashboard.png`,
    title: "FIFA World Cup — Data Analytics & BI",
    description:
      "Academic project exploring World Cups from 1930 to 2014. CSV data preparation with Python and Pandas: deduplication, joins and goal calculations. Star schema modeling in SQLite and a Power BI dashboard to explore matches, goals and attendance by edition, host country, stadium and tournament stage.",
    previewLink: `${fifaProjectPath}/dashboard.png`,
    downloadLink: `${fifaProjectPath}/fifa-world-cup.pbix`,
    documentLink: `${fifaProjectPath}/rapport.pdf`,
    techTags: ["Power BI", "Python", "Pandas", "SQLite", "ETL", "Data Warehouse"],
  },
  {
    imgPath: carSalesPreview,
    title: "Car Sales — Power BI",
    description:
      "Interactive car sales dashboard built from Excel data. Tracks year-to-date sales, average price and vehicles sold, weekly trends, and breakdowns by body style, color, manufacturer and region. Includes filters for engine, body style, region and price range.",
    previewLink: carSalesPreview,
    downloadLink: carSalesReport,
    techTags: ["Power BI", "Excel", "Business Intelligence", "Data Visualization"],
  },
  {
    imgPath: digmacoScreenshots[0].src,
    screenshots: digmacoScreenshots,
    isBlog: false,
    title: "DigMaco Analytics",
    description:
      "Full-stack behavioral analytics platform for a telecom operator. Complete ETL pipeline (Extract-Transform-Load), ML modules (churn prediction, K-Means segmentation, anomaly detection), AI report generation via Google Gemini with automated PDF export.",
    ghLink: "https://github.com/hawalayessin/user-behavior-analytics",
    techTags: ["FastAPI", "React", "PostgreSQL", "scikit-learn", "Docker", "Gemini"],
  },
  {
    imgPath: etl,
    isBlog: false,
    title: "DigMaco — ETL Component",
    description:
      "ETL component of the same DigMaco capstone. Pipeline bridging a production database to an analytical data warehouse. Deterministic UUID5 key mapping, upsert load strategy, async parallelization. Reduced backend response time by 75%+.",
    ghLink: "https://github.com/hawalayessin/user-behavior-analytics",
    techTags: ["Python", "Pandas", "PostgreSQL", "Alembic", "JWT", "Docker"],
  },
  {
    imgPath: seo,
    isBlog: false,
    title: "SEO Locale Platform",
    description:
      "Google Business Profile management and synchronization platform with statistical analysis via the Google Analytics API. React/TypeScript frontend connected to a Symfony backend.",

    techTags: ["Symfony", "React", "TypeScript", "MySQL", "Google API", "Docker"],
  },
  {
    imgPath: stadium,
    isBlog: false,
    title: "Stadium Reservation — MERN",
    description:
      "MERN stadium booking application with JWT authentication. Available time slots, booking and cancellation, plus an admin interface for stadium and availability management. User reviews and ratings with comment summaries generated by Google Gemini.",
    ghLink: "https://github.com/hawalayessin/reservation-stade-module-mern-2026",
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
                previewLink={proj.previewLink}
                downloadLink={proj.downloadLink}
                documentLink={proj.documentLink}
                screenshots={proj.screenshots}
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
