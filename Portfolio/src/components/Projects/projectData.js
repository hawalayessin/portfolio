import louzirScreenshots from "./louzirScreenshots";
import digmacoScreenshots from "./digmacoScreenshots";
import soaScreenshots from "./soaScreenshots";
import etl from "../../Assets/Projects/etl.png";
import seo from "../../Assets/Projects/seo.png";
import stadium from "../../Assets/Projects/stadium.png";
import neuralbey from "../../Assets/Projects/neuralbey.png";

const carSalesPreview = `${process.env.PUBLIC_URL}/projects/car-sales/dashboard.png`;
const carSalesReport = `${process.env.PUBLIC_URL}/projects/car-sales/car-sales.pbix`;
const fifaProjectPath = `${process.env.PUBLIC_URL}/projects/fifa-world-cup`;
const talendPreview = `${process.env.PUBLIC_URL}/projects/talend/pipeline.png`;
const talendScreenshots = [{ src: talendPreview, caption: { fr: "Schéma reconstitué à partir des jobs Talend", en: "Diagram reconstructed from Talend job definitions" } }];
const smartshopPath = `${process.env.PUBLIC_URL}/projects/smartshop`;
const smartshopScreenshots = [
  { src: `${smartshopPath}/catalogue.png`, caption: { fr: "Catalogue SmartShop et filtres combinés", en: "SmartShop catalogue and combined filters" } },
  { src: `${smartshopPath}/form.png`, caption: { fr: "Formulaire réactif de gestion des produits", en: "Reactive product management form" } },
  { src: `${smartshopPath}/footer.png`, caption: { fr: "Footer et navigation vers les pages de la boutique", en: "Footer and shop page navigation" } },
];

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
    demoLink: "https://insighthub-demo.vercel.app",
    techTags: ["FastAPI", "React", "PostgreSQL", "scikit-learn", "Docker", "Gemini"],
  },
  {
    imgPath: etl,
    isBlog: false,
    title: "DigMaco — Composant ETL",
    description:
      "Composant du même PFE DigMaco. Pipeline ETL reliant une base de production à un entrepôt analytique. Mapping UUID5 déterministe, stratégie d'upsert, parallélisation asynchrone. Optimisation des accès aux données; les limites de mesure sont documentées dans le dépôt.",
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
    imgPath: `${process.env.PUBLIC_URL}/projects/soaexa/preview.png`,
    screenshots: soaScreenshots,
    isBlog: false,
    title: "SOAEXA - Console de transactions",
    description:
      "Pipeline de transactions commerciales en cinq services Node.js : réception gRPC et REST, événements Kafka, classification métier, stockage MongoDB et lecture GraphQL. Console React pour exécuter des scénarios, inspecter cinq règles, filtrer le journal et exporter les résultats. Démo Vercel : moteur réel côté serveur et session isolée, sans broker Kafka ni base partagée.",
    ghLink: "https://github.com/hawalayessin/SOAEXA",
    demoLink: "https://soaexa-console.vercel.app",
    techTags: ["Node.js", "React", "Kafka", "gRPC", "GraphQL", "MongoDB"],
  },
  {
    imgPath: neuralbey,
    isBlog: false,
    title: "NeuralBey — E-learning",
    description:
      "Plateforme e-learning modulaire, scalable et sécurisée. Développement complet du frontend et backend avec gestion des cours, utilisateurs et certifications.",

    techTags: ["Symfony", "ReactJS", "Node.js", "MySQL", "Scrum"],
  },
  {
    imgPath: talendPreview,
    screenshots: talendScreenshots,
    title: "ETL Talend - Clients & Ventes",
    description:
      "Ensemble de jobs de formation Data Engineering sous Talend Open Studio. Extraction depuis SQLite et CSV, mapping avec tMap, calcul de l'âge et de la tranche d'âge des clients. Calcul du montant des achats et catégorisation basic, standard ou premium, puis chargement PostgreSQL. Un job distinct réalise des agrégations avec tAggregateRow et restitue les résultats via tLogRow.",
    techTags: ["Talend", "ETL", "SQLite", "CSV", "PostgreSQL", "tMap"],
  },
  {
    imgPath: smartshopScreenshots[0].src,
    screenshots: smartshopScreenshots,
    title: "SmartShop - Catalogue Angular",
    description:
      "Application Angular 17 de catalogue et de gestion de smartphones : recherche, filtres, fiches détaillées et CRUD avec formulaires réactifs. Navigation multipage, accessoires, offres fictives et panier de démonstration avec quantités et totaux. Bannière et footer revus, données JSON sans backend déployé ni achat réel. API Express et MongoDB disponibles dans le code source.",
    ghLink: "https://github.com/hawalayessin/SmartphoneShop",
    demoLink: "https://smartshop-angular-demo.vercel.app",
    techTags: ["Angular", "TypeScript", "RxJS", "Bootstrap", "Express", "MongoDB"],
  },
  {
    imgPath: louzirScreenshots[0].src,
    screenshots: louzirScreenshots,
    title: "LouzirModeIntime — Boutique e-commerce",
    description:
      "Boutique e-commerce basée sur Laravel/Bagisto et Vue.js. Personnalisation du thème responsive : carrousel administrable, catalogue avec filtres, fiches produits et recommandations, panier et parcours de commande. Gestion du catalogue, des commandes, des livraisons et du contenu depuis l’administration. Interface français/anglais/arabe, déployée sur Railway avec des données de démonstration.",
    ghLink: "https://github.com/hawalayessin/LouzirModeIntime",
    demoLink: "https://louzirmodeintime-production.up.railway.app/",
    techTags: ["Laravel", "PHP", "Vue.js", "MySQL", "Tailwind CSS", "Railway"],
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
    demoLink: "https://insighthub-demo.vercel.app",
    techTags: ["FastAPI", "React", "PostgreSQL", "scikit-learn", "Docker", "Gemini"],
  },
  {
    imgPath: etl,
    isBlog: false,
    title: "DigMaco — ETL Component",
    description:
      "ETL component of the same DigMaco capstone. Pipeline bridging a production database to an analytical data warehouse. Deterministic UUID5 key mapping, upsert load strategy, async parallelization. Data access optimization; measurement limitations are documented in the repository.",
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
    imgPath: `${process.env.PUBLIC_URL}/projects/soaexa/preview.png`,
    screenshots: soaScreenshots,
    isBlog: false,
    title: "SOAEXA - Transaction Console",
    description:
      "Commercial transaction pipeline built with five Node.js services: gRPC and REST ingestion, Kafka events, business classification, MongoDB storage and GraphQL reads. A React console runs scenarios, inspects five rules, filters the journal and exports results. Vercel demo: real server-side engine and isolated sessions, without a Kafka broker or shared database.",
    ghLink: "https://github.com/hawalayessin/SOAEXA",
    demoLink: "https://soaexa-console.vercel.app",
    techTags: ["Node.js", "React", "Kafka", "gRPC", "GraphQL", "MongoDB"],
  },
  {
    imgPath: neuralbey,
    isBlog: false,
    title: "NeuralBey — E-learning",
    description:
      "Modular, scalable, and secure e-learning platform. Complete frontend and backend development with course management, users, and certifications.",

    techTags: ["Symfony", "ReactJS", "Node.js", "MySQL", "Scrum"],
  },
  {
    imgPath: talendPreview,
    screenshots: talendScreenshots,
    title: "Talend ETL - Customers & Sales",
    description:
      "Data Engineering training jobs built with Talend Open Studio. SQLite and CSV extraction, tMap transformations, customer age and age-group calculations. Purchase amounts drive basic, standard or premium customer categories before loading into PostgreSQL. A separate job aggregates data with tAggregateRow and displays results through tLogRow.",
    techTags: ["Talend", "ETL", "SQLite", "CSV", "PostgreSQL", "tMap"],
  },
  {
    imgPath: smartshopScreenshots[0].src,
    screenshots: smartshopScreenshots,
    title: "SmartShop - Angular Catalogue",
    description:
      "Angular 17 smartphone catalogue and inventory application: search, filters, detail pages and CRUD with reactive forms. Multi-page navigation, accessories, fictional offers and a demo cart with quantities and totals. Refreshed banner and footer, JSON data without a deployed backend or real purchases. Express and MongoDB API included in the source code.",
    ghLink: "https://github.com/hawalayessin/SmartphoneShop",
    demoLink: "https://smartshop-angular-demo.vercel.app",
    techTags: ["Angular", "TypeScript", "RxJS", "Bootstrap", "Express", "MongoDB"],
  },
  {
    imgPath: louzirScreenshots[0].src,
    screenshots: louzirScreenshots,
    title: "LouzirModeIntime — E-commerce Store",
    description:
      "E-commerce store built on Laravel/Bagisto and Vue.js. Customized responsive theme with an admin-managed carousel, catalogue filters, product details and recommendations, cart and checkout. Administration for catalogue, orders, shipping and site content. French/English/Arabic interface deployed on Railway with demonstration data.",
    ghLink: "https://github.com/hawalayessin/LouzirModeIntime",
    demoLink: "https://louzirmodeintime-production.up.railway.app/",
    techTags: ["Laravel", "PHP", "Vue.js", "MySQL", "Tailwind CSS", "Railway"],
  },
];


const metadata = [
  { id: "fifa", category: "data", context: { fr: "Projet académique · BI", en: "Academic project · BI" }, summary: { fr: "De la préparation des CSV à un modèle en étoile et un dashboard Power BI pour explorer les Coupes du Monde de 1930 à 2014.", en: "From CSV preparation to a star schema and a Power BI dashboard exploring World Cups from 1930 to 2014." } },
  { id: "car-sales", category: "data", context: { fr: "Tableau de bord · BI", en: "Dashboard · BI" } },
  { id: "digmaco", category: "data", context: { fr: "PFE · Full Stack & Data", en: "Capstone · Full Stack & Data" }, summary: { fr: "Une chaîne analytics complète : pipeline ETL, API FastAPI, tableaux de bord React et modules de segmentation et de prédiction.", en: "An analytics workflow combining ETL, a FastAPI backend, React dashboards, segmentation and prediction modules." } },
  { id: "etl", category: "data" },
  { id: "seo", category: "web", context: { fr: "Stage · Code non public", en: "Internship · Source not public" } },
  { id: "stadium", category: "web", context: { fr: "Projet académique · MERN", en: "Academic project · MERN" }, summary: { fr: "Réserver et annuler un créneau sportif, gérer les terrains et les avis. Un parcours MERN avec authentification JWT et rôles utilisateur / administrateur.", en: "Book and cancel sports time slots, manage stadiums and reviews. A MERN application with JWT authentication and user / administrator roles." } },
  { id: "soa", category: "web", context: { fr: "Architecture distribuée · Démo interactive", en: "Distributed architecture · Interactive demo" }, summary: { fr: "Exécuter une transaction, suivre sa classification et interroger les résultats en GraphQL. Une console interactive pour explorer les règles du pipeline SOAEXA, avec code source et démo publique.", en: "Run a transaction, trace its classification and query results with GraphQL. An interactive console exploring SOAEXA's pipeline rules, with source code and a public demo." } },
  { id: "neuralbey", category: "web", context: { fr: "Stage · Code non public", en: "Internship · Source not public" } },
  { id: "talend", category: "data", context: { fr: "Formation · Data Engineering", en: "Training · Data Engineering" } },
  { id: "smartshop", category: "web", context: { fr: "Projet d'apprentissage · Angular", en: "Learning project · Angular" } },
  { id: "louzir", category: "web", context: { fr: "E-commerce · Déployé sur Railway", en: "E-commerce · Deployed on Railway" } },
];

// The ETL is part of DigMaco, not a separate project in the gallery.
const order = ["digmaco", "soa", "louzir", "stadium", "smartshop", "fifa", "car-sales", "seo", "neuralbey", "talend"];
export function getProjects(lang) {
  return (lang === "fr" ? projectsFr : projectsEn)
    .map((project, index) => ({ ...project, ...metadata[index], context: metadata[index].context?.[lang], summary: metadata[index].summary?.[lang] }))
    .filter(project => project.id !== "etl")
    .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
}
